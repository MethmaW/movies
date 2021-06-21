import { Component, OnInit } from "@angular/core";
import { MoviesService } from "../movies.service";

interface MoviesType {
	Title: string;
	Year: string;
	Poster: string;
	imdbID: string;
}

@Component({
	selector: "app-movies-home",
	templateUrl: "./movies-home.component.html",
	styleUrls: ["./movies-home.component.css"],
})
export class MoviesHomeComponent implements OnInit {
	moviesList: MoviesType[] = [];
	message: string = "Welcome to OMDB Search, search something in the bar above!";

	constructor(private movies: MoviesService) {}

	ngOnInit(): void {}

	onSearch(term: string) {
		this.movies.search(term).subscribe((response) => {
			if (response === undefined) {
				this.message = "Movie not found!";
			}

			this.moviesList = response;
		});
	}
}
