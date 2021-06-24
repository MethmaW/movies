import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { MoviesRoutingModule } from "./movies-routing.module";
import { SearchBarComponent } from "./search-bar/search-bar.component";
import { MovieListComponent } from "./movie-list/movie-list.component";
import { MoviesHomeComponent } from "./movies-home/movies-home.component";
import { MovieCardComponent } from "./movie-card/movie-card.component";
import { MessageComponent } from "./message/message.component";

import { SharedModule } from "../shared/shared.module";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { CustomHttpInterceptor } from "../helper/custom-http-interceptor";

@NgModule({
	declarations: [
		SearchBarComponent,
		MovieListComponent,
		MoviesHomeComponent,
		MovieCardComponent,
		MessageComponent,
		LandingPageComponent,
	],
	imports: [
		CommonModule,
		MoviesRoutingModule,
		ReactiveFormsModule,
		SharedModule,
	],
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: CustomHttpInterceptor,
			multi: true,
		},
	],
})
export class MoviesModule {}
