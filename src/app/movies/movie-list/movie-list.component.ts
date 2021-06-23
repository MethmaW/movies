import { Component, OnInit, Input } from "@angular/core";
import { Movies } from "../../shared/models/movies.model";
import { ActivatedRoute } from "@angular/router";
import { MoviesService } from "../movies.service";
import { Router } from "@angular/router";

@Component({
	selector: "app-movie-list",
	templateUrl: "./movie-list.component.html",
	styleUrls: ["./movie-list.component.css"],
})
export class MovieListComponent implements OnInit {
	@Input() movies: Movies[] = [];

	movieId: string = "";
	extract: boolean = false;
	name: string = "";

	constructor(
		private route: ActivatedRoute,
		private moviesL: MoviesService,
		router: Router
	) {
		router.events.subscribe((val) => {
			let id = this.route.snapshot.paramMap.get("name");
			this.onSearch(id);
		});
	}

	ngOnInit(): void {
		let id = this.route.snapshot.paramMap.get("name");
		this.name = id;
		this.onSearch(id);
	}

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

	onSearch(term) {
		// localStorage.setItem("lastMovie", term);

		this.moviesL.search(term).subscribe((response) => {
			// if (response === undefined) {
			// 	this.message = "Movie not found!";
			// }

			this.movies = response;

			console.log("res", response);
		});
	}
}
