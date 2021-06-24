import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MoviesHomeComponent } from "./movies-home/movies-home.component";
import { MovieListComponent } from "./movie-list/movie-list.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { NotFoundComponent } from "../shared/not-found/not-found.component";

const routes: Routes = [
	{
		path: "search",
		component: MoviesHomeComponent,
		children: [
			{ path: "", component: LandingPageComponent },
			{ path: ":name", component: MovieListComponent },
		],
	},
	{ path: "**", component: NotFoundComponent },
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class MoviesRoutingModule {}
