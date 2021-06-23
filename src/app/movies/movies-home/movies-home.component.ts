import { Component, OnInit } from "@angular/core";
import { MoviesService } from "../movies.service";
import { Movies } from "../../shared/models/movies.model";

@Component({
	selector: "app-movies-home",
	templateUrl: "./movies-home.component.html",
	styleUrls: ["./movies-home.component.css"],
})
export class MoviesHomeComponent implements OnInit {
	moviesList: Movies[] = [];
	message: string = "Welcome to OMDB Search, search something in the bar above!";
	showMessage: boolean = false;

	constructor(private movies: MoviesService) {}

	ngOnInit(): void {
		let pathname = window.location.pathname;
		console.log("path", pathname);
		if (pathname !== "/movies") {
			this.showMessage = true;
		}
	}

	//calling the service to fetch a list of movies
	onSearch(term: string) {
		// localStorage.setItem("lastMovie", term);

		this.movies.search(term).subscribe((response) => {
			if (response === undefined) {
				this.message = "Movie not found!";
			}

			this.moviesList = response;
		});
	}
}
