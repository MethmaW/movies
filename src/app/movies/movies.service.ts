import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { pluck } from "rxjs/operators";
import { Title } from "@angular/platform-browser";

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

	//receiving the searched index from the movie-home component and fetching data from the API
	search(term: string) {
		return this.http
			.get<movieListType>("http://www.omdbapi.com/?", {
				params: {
					apikey: "360ea600",
					s: term,
				},
			})
			.pipe(pluck("Search"));
	}

	getDetails(id: string) {
		return this.http.get<DetailsType>("http://www.omdbapi.com/?", {
			params: {
				apikey: "360ea600",
				i: id,
			},
		});
	}
}
