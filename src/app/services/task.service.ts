import { Injectable } from "@angular/core";
import Task from "../classes/Task";

@Injectable({
    providedIn: 'root'
})
export default class TaskService {
    tasks: Task[];

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

    private saveLocalStorage() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
}
