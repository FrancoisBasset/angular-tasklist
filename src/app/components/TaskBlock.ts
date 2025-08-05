import { Component, input, output } from "@angular/core";
import Task from "../classes/Task";

@Component({
    selector: 'TaskBlock',
    template: `
        <label style="background-color: blue">{{task()?.name}}</label>
        <label style="background-color: red">{{task()?.date}}</label>
        <button (click)="onRemoveButtonClicked.emit()">X</button>
    `,
    styles: `
        :host {
            display: flex;
            flex-direction: row;
            gap: 3px;
            background-color: orange;
            width: fit-content;
            padding: 5px;
            border-radius: 5px;
        }

        label {
            padding: 5px;
            border-radius: 5px;
            color: white;
        }
    `
})
export default class TaskBlock {
    onRemoveButtonClicked = output();
    task = input<Task>();
}