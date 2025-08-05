import { Component } from "@angular/core";

import AddTaskButton from "../../components/AddTaskButton";
import TaskForm from "../../components/TaskForm";
import TaskList from "../../components/TaskList";
import Task from "../../classes/Task";

@Component({
    selector: 'Home',
    imports: [AddTaskButton, TaskForm, TaskList],
    templateUrl: './home.html',
    styles: `
        div {
            display: flex;
            flex-direction: column;
        }
    `
})
export default class Home {
	formOpened: boolean = false;
    tasks: Task[] = [];

    constructor() {
        this.tasks = JSON.parse(localStorage.getItem('tasks') ?? '[]');
    }

    createTask(task: Task) {
        this.tasks.push(task);
        this.saveLocalStorage();
    }

    removeTask(taskId: string) {
        this.tasks = this.tasks.filter(t => t.id !== taskId);
        this.saveLocalStorage();
    }

    saveLocalStorage() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
}