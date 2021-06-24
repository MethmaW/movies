import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { pluck, catchError } from "rxjs/operators";
import { environment } from "../../environments/environment";
import { Movies } from "../shared/models/movies.model";

interface movieListType {
	Search: Movies[];
}

interface DetailsType {
	Plot: string;
	Actors: string;
	Ratings: { Source: string; Value: string }[];
}

@Injectable({
	providedIn: "root",
})
export class MoviesService {
	constructor(private http: HttpClient) {}

	//getting a list of movies according to the user input
	search(term: string) {
		return this.http
			.get<movieListType>(environment.omdbAPI, {
				params: {
					s: term,
				},
			})
			.pipe(pluck("Search"));
	}

	//getting more details about one movie
	getDetails(id: string) {
		return this.http.get<DetailsType>(environment.omdbAPI, {
			params: {
				i: id,
			},
		});
	}
}
