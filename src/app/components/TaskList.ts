import { Component, input, output } from "@angular/core";
import Task from "../classes/Task";
import TaskBlock from "./TaskBlock";

@Component({
    selector: 'TaskList',
    imports: [TaskBlock],
    template: `
        @for (task of tasks(); track task) {
            <TaskBlock [task]="task" (onRemoveButtonClicked)="onRemoveButtonClicked.emit(task.id)" />
        }
    `,
    styles: `
        :host {
            display: flex;
            flex-wrap: wrap;
            gap: 3px;
        }
    `
})
export default class TaskList {
    onRemoveButtonClicked = output<string>();
    tasks = input<Task[]>();
}