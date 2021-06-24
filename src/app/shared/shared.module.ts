import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { NotFoundComponent } from "./not-found/not-found.component";
import { RouterModule } from "@angular/router";

@NgModule({
	declarations: [NotFoundComponent],
	imports: [CommonModule, ReactiveFormsModule, RouterModule],
	exports: [NotFoundComponent],
})
export class SharedModule {}
