import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
@Component({
	selector: "app-search-bar",
	templateUrl: "./search-bar.component.html",
	styleUrls: ["./search-bar.component.css"],
})
export class SearchBarComponent implements OnInit {
	@Output() submitted = new EventEmitter<string>();

	searchIndex: string = "";

	searchForm = new FormGroup({
		movieName: new FormControl("", [
			Validators.required,
			Validators.minLength(3),
		]),
	});

	constructor() {}

	ngOnInit(): void {}

	//passing the value to the parent (movies-home) with the serach index to call the service
	onSubmitSearch(name: string) {
		localStorage.setItem("lastMovie", name);
		this.submitted.emit(name);
	}
}
