import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MoviesHomeComponent } from "./movies-home/movies-home.component";

const routes: Routes = [
	{ path: "movies/?m=na", component: MoviesHomeComponent },
	{ path: "**", component: MoviesHomeComponent },
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class MoviesRoutingModule {}
