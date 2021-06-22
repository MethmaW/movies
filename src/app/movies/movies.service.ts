import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { pluck, catchError } from "rxjs/operators";
import { environment } from "../../environments/environment";

interface movieListType {
	Search: { Title: string; Year: string; Poster: string; imdbID: string }[];
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
					apikey: environment.omdbAPIKey,
					s: term,
				},
			})
			.pipe(pluck("Search"));
	}

	//getting more details about one movie
	getDetails(id: string) {
		return this.http.get<DetailsType>(environment.omdbAPI, {
			params: {
				apikey: environment.omdbAPIKey,
				i: id,
			},
		});
	}
}
