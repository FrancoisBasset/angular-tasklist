import { Component } from '@angular/core';

@Component({
	selector: 'AddTaskButton',
	imports: [],
	template: '<button>Créer une tâche</button>',
	styles: `
		button {
			color: white;
			background-color: forestgreen;
		}
	`
})
export default class AddTaskButton {

}
