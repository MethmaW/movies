import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MoviesHomeComponent } from "./movies-home/movies-home.component";
import { MovieListComponent } from "./movie-list/movie-list.component";

const routes: Routes = [
	{ path: "movies", component: MoviesHomeComponent, pathMatch: "full" },
	{ path: "movies/:name", component: MovieListComponent },
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class MoviesRoutingModule {}
