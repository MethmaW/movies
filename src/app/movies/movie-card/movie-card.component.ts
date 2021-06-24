import { Component, Input, Output, OnInit, EventEmitter } from "@angular/core";
import { MoviesService } from "../movies.service";
import { Movies } from "../../shared/models/movies.model";
import { Details } from "../../shared/models/details.model";

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
	@Input() movie: Movies;
	@Output() extract = new EventEmitter<extractType>();

	btnText: string = "DETAILS";
	showDetails: boolean = false;
	details: Details = { Plot: "", Actors: "", Ratings: [] };

	constructor(private movies: MoviesService) {}

	ngOnInit(): void {}

	//sending the id of the movie to the parent component to view more or less details
	moreDetails(id: string) {
		if (this.btnText === "DETAILS") {
			this.movies.getDetails(id).subscribe((response) => {
				this.details = response;
			});

			this.extract.emit({ id: id, show: true });
			this.btnText = "HIDE";
			this.showDetails = true;
		} else {
			this.extract.emit({ id: id, show: false });
			this.btnText = "DETAILS";
			this.showDetails = false;
		}
	}
}
