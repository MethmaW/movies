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

	//receiving the value passed from the search-bar component
	//subscribing to the search function in the service
	//sending the searched index as an argument of the search function
	//assigning the response to the movieList property
	onSearch(term: string) {
		this.movies.search(term).subscribe((response) => {
			this.moviesList = response;
		});
	}
}
