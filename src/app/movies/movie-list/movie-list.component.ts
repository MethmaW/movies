import { Component, OnInit, Input } from "@angular/core";
import { Movies } from "../../shared/models/movies.model";
import { MoviesService } from "../movies.service";
import { Router } from "@angular/router";
import { filter } from "rxjs/operators";
import { Event, ActivatedRoute, NavigationEnd } from "@angular/router";

@Component({
	selector: "app-movie-list",
	templateUrl: "./movie-list.component.html",
	styleUrls: ["./movie-list.component.css"],
})
export class MovieListComponent implements OnInit {
	movies: Movies[] = [];
	movieId: string = "";
	extract: boolean = false;
	currentMovieName: string = "";
	currentIndex = 1;

	constructor(
		private route: ActivatedRoute,
		private moviesService: MoviesService,
		private router: Router
	) {
		//detect as soon as the current url changes
		this.router.events
			.pipe(filter((event: Event) => event instanceof NavigationEnd))
			.subscribe(() =>
				this.onSearch(this.route.snapshot.paramMap.get("name"), this.currentIndex)
			);
	}

	ngOnInit(): void {}

	counter(i: number) {
		return new Array(i);
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

	onSearch(term, pageId) {
		this.currentMovieName = term;
		this.currentIndex = pageId;

		this.moviesService.search(term, pageId).subscribe((response) => {
			this.movies = response;
			console.log("res", response);
		});

		window.scrollTo({ top: 0, behavior: "smooth" });
	}
}
