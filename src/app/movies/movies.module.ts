import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { MoviesRoutingModule } from "./movies-routing.module";
import { SearchBarComponent } from "./search-bar/search-bar.component";
import { MovieListComponent } from "./movie-list/movie-list.component";
import { MoviesHomeComponent } from "./movies-home/movies-home.component";
import { MovieCardComponent } from "./movie-card/movie-card.component";
import { MessageComponent } from "./message/message.component";

@NgModule({
	declarations: [
		SearchBarComponent,
		MovieListComponent,
		MoviesHomeComponent,
		MovieCardComponent,
		MessageComponent,
	],
	imports: [CommonModule, MoviesRoutingModule, ReactiveFormsModule],
})
export class MoviesModule {}
