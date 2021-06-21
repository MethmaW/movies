import { Component, Input, Output, OnInit, EventEmitter } from "@angular/core";
import { MoviesService } from "../movies.service";

interface MovieType {
	Title: string;
	Year: string;
	Poster: string;
	imdbID: string;
}
interface DetailsType {
	Plot: string;
	Actors: string;
	Ratings: { Source: string; Value: string }[];
}

interface extractType {
	id: string;
	show: boolean;
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
	@Output() extract = new EventEmitter<extractType>();

	btnText: string = "Details";
	showDetails: boolean = false;
	details: DetailsType = { Plot: "", Actors: "", Ratings: [] };

	constructor(private movies: MoviesService) {}

	ngOnInit(): void {}

	//receiving the id passed from the details button
	//subscribing to the getDetails function in the service
	//sending the id of the movie as an argument of the search function
	//assigning the response to the details property
	moreDetails(id: string) {
		if (this.btnText === "Details") {
			this.movies.getDetails(id).subscribe((response) => {
				this.details = response;
			});

			this.extract.emit({ id: id, show: true });
			this.btnText = "Hide";
			this.showDetails = true;
		} else {
			this.extract.emit({ id: id, show: false });
			this.btnText = "Details";
			this.showDetails = false;
		}
	}
}
