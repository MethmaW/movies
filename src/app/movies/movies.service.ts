import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { pluck } from "rxjs/operators";

@Injectable({
	providedIn: "root",
})
export class MoviesService {
	constructor(private http: HttpClient) {}

	search(term: string) {
		return this.http
			.get<any>("http://www.omdbapi.com/?", {
				params: {
					apikey: "360ea600",
					s: term,
				},
			})
			.pipe(pluck("Search"));
	}

	getDetails(id: string) {
		return this.http
			.get<any>("http://www.omdbapi.com/?", {
				params: {
					apikey: "360ea600",
					i: id,
				},
			})
			.pipe();
	}
}
