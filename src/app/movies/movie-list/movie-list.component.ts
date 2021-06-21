import { Component, OnInit, Input } from "@angular/core";

interface MoviesType {
	Title: string;
	Year: string;
	Poster: string;
	imdbID: string;
}

@Component({
	selector: "app-movie-list",
	templateUrl: "./movie-list.component.html",
	styleUrls: ["./movie-list.component.css"],
})
export class MovieListComponent implements OnInit {
	@Input() movies: MoviesType[] = [];

	constructor() {}

	ngOnInit(): void {}
}
