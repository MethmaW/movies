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

	constructor(private movies: MoviesService) {}

	ngOnInit(): void {}

	onSearch(term: string) {
		this.movies.search(term).subscribe((response) => {
			this.moviesList = response;
		});
	}
}
