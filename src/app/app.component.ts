import { Component } from "@angular/core";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.css"],
})
export class AppComponent {
	//when a users visits the homepage,
	//automatically redirect them to the last searched movie list
	ngAfterContentInit() {
		let currentLocation = window.location.pathname;
		let lastSearched = localStorage.getItem("lastMovie");

		if (currentLocation === "/search" || currentLocation === "/search/") {
			if (lastSearched !== null) {
				history.pushState("", "", "/search/" + lastSearched);
			}
		}
	}
}
