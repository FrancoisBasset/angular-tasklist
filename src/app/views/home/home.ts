import { Component, computed, effect, inject, signal } from "@angular/core";

import AddTaskButton from "../../components/AddTaskButton";
import TaskForm from "../../components/TaskForm";
import TaskList from "../../components/TaskList";
import TaskService from "../../services/task.service";
import { UpperCasePipe } from "@angular/common";
import { SpacePipe } from "../../space-pipe";
import GreenDirective from "../../green";

@Component({
    selector: 'Home',
    imports: [AddTaskButton, TaskForm, TaskList, UpperCasePipe, SpacePipe, GreenDirective],
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

    taskService: TaskService = inject(TaskService);

    untest = signal('bonjour');
    nombre = signal(0);
    ledouble = computed(() => this.nombre() * 2);

    constructor() {
        setInterval(() => {            
            this.untest.update(value => value + 'a');
        }, 500);

        effect(() => {
            console.log('N' + this.nombre());
        });

        effect(() => {
            console.log(this.untest());
        });

        effect(() => {
            console.log('Le double est ' + this.ledouble());
            
        })
    }

    increment() {
        this.nombre.update(v => v + 1)
    }
}