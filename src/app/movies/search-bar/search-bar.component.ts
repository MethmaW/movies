import { Component, OnInit, EventEmitter, Output } from "@angular/core";
@Component({
	selector: "app-search-bar",
	templateUrl: "./search-bar.component.html",
	styleUrls: ["./search-bar.component.css"],
})
export class SearchBarComponent implements OnInit {
	@Output() submitted = new EventEmitter<string>();

	searchIndex: string = "";

	constructor() {}

	ngOnInit(): void {}

	//changing value of the search input
	onChangeSearch(value: string) {
		this.searchIndex = value;
	}

	//passing the value to the parent (movies-home) with the serach index to call the service
	onSubmitSearch(event: Event) {
		event.preventDefault();
		this.submitted.emit(this.searchIndex);
	}
}
