import { Component, Input, Output, OnInit, EventEmitter } from "@angular/core";
import { MoviesService } from "../movies.service";

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
	@Input() movieDetails: any = {};

	details: Details = { Plot: "", Actors: "", Ratings: [] };

	constructor(private movies: MoviesService) {}

	ngOnInit(): void {}

	moreDetails(id: string) {
		console.log(id);
		this.movies.getDetails(id).subscribe((response) => {
			this.details = response;
		});
	}
}
