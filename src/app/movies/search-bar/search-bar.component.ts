import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
@Component({
	selector: "app-search-bar",
	templateUrl: "./search-bar.component.html",
	styleUrls: ["./search-bar.component.css"],
})
export class SearchBarComponent implements OnInit {
	searchForm = new FormGroup({
		movieName: new FormControl("", [
			Validators.required,
			Validators.minLength(3),
		]),
	});

	constructor() {}

	ngOnInit(): void {}

	//saving the last searched movie name to the local storage
	onSubmitSearch(name: string) {
		localStorage.setItem("lastMovie", name);
	}

	//handling input field errors
	showErrors() {
		const { dirty, touched, errors } = this.searchForm.get("movieName");
		return dirty && touched && errors;
	}
}
