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

	movieId: string = "";
	extract: boolean = false;

	constructor() {}

	ngOnInit(): void {}

	//handling the visibility of the card - to show or hide more details
	show(targetMovie: string, currentMovie: string) {
		if (targetMovie === currentMovie && this.extract) {
			return true;
		} else {
			return false;
		}
	}

	//receiving the id of the movie that the user needs to see more details or hide details
	extractMovie(value: { id: string; show: boolean }) {
		this.movieId = value.id;
		this.extract = value.show;
	}
}
