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
	//receiving the movies from movie-home
	@Input() movies: MoviesType[] = [];

	movieId: string = "";
	extract: boolean = false;

	constructor() {}

	ngOnInit(): void {}

	show(targetMovie: string, currentMovie: string) {
		if (targetMovie === currentMovie && this.extract) {
			return true;
		} else {
			return false;
		}
	}

	extractMovie(value: { id: string; show: boolean }) {
		this.movieId = value.id;
		this.extract = value.show;
	}
}
