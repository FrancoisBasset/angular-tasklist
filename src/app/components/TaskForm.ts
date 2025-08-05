import { Component, input, output } from "@angular/core";
import NameInput from "./NameInput";
import DateInput from "./DateInput";
import CancelFormButton from "./CancelFormButton";
import { FormsModule } from "@angular/forms";
import Task from "../classes/Task";

@Component({
    selector: 'TaskForm',
    imports: [FormsModule, NameInput, DateInput, CancelFormButton],
    template: `
        <div>
            <NameInput [(ngModel)]="name" />
		    <DateInput [(ngModel)]="date" />
            <div>
                <button [disabled]="!name || !date" (click)="emitCreation()">Créer</button>
	    	    <CancelFormButton (click)="onCancelFormButtonClicked.emit()" />
            </div>
        </div>
    `,
    styles: `
        div {
            display: flex;
            flex-direction: column;
            width: fit-content;
            gap: 4px;
            padding: 5px;
            border: 1px solid black;
        }
    `
})
export default class TaskForm {
    onCancelFormButtonClicked = output();
    onCreateButtonClicked = output<Task>();
    name = '';
    date = '';

    emitCreation() {
        this.onCancelFormButtonClicked.emit();
        this.onCreateButtonClicked.emit(
            new Task(this.name, this.date)
        );
    }
}