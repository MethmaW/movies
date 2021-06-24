import {
	HttpErrorResponse,
	HttpEvent,
	HttpHandler,
	HttpInterceptor,
	HttpRequest,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, finalize, retry } from "rxjs/operators";
import { environment } from "../../environments/environment";

@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor {
	intercept(
		request: HttpRequest<any>,
		next: HttpHandler
	): Observable<HttpEvent<any>> {
		const { url } = request;

		//adding the apikey to the url params
		if (url === "http://www.omdbapi.com/?") {
			const req = request.clone({
				url: `${url}apikey=${environment.omdbAPIKey}`,
			});

			return next.handle(req);
		}

		return next.handle(request).pipe(
			//retrying on request fail
			retry(2),

			//catching the error on request fail
			catchError((error: HttpErrorResponse) => {
				alert("Something went wrong!");
				return throwError(error);
			})
		);
	}
}
