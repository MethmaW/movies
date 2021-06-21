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

	onChangeSearch(value: string) {
		this.searchIndex = value;
	}

	onSubmitSearch(event: Event) {
		event.preventDefault();

		//sending the searched index to the movies-home component
		this.submitted.emit(this.searchIndex);
	}
}
