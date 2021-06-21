import { Component, Input, Output, OnInit, EventEmitter } from "@angular/core";
import { MoviesService } from "../movies.service";

interface MovieType {
	Title: string;
	Year: string;
	Poster: string;
	imdbID: string;
}
interface Details {
	Plot: string;
	Actors: string;
	Ratings: { Source: string; Value: string }[];
}

@Component({
	selector: "app-movie-card",
	templateUrl: "./movie-card.component.html",
	styleUrls: ["./movie-card.component.css"],
})
export class MovieCardComponent implements OnInit {
	@Input() movie: MovieType = {
		Title: "",
		Year: "",
		Poster: "",
		imdbID: "",
	};

	details: Details = { Plot: "", Actors: "", Ratings: [] };

	constructor(private movies: MoviesService) {}

	ngOnInit(): void {}

	//receiving the id passed from the details button
	//subscribing to the getDetails function in the service
	//sending the id of the movie as an argument of the search function
	//assigning the response to the details property
	moreDetails(id: string) {
		console.log(id);
		this.movies.getDetails(id).subscribe((response) => {
			this.details = response;
		});
	}
}
