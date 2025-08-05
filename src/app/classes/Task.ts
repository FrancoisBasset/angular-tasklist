import * as uuid from 'uuid';

export default class Task {
    public id: string;
    public name: string;
    public date: string;

    constructor(name: string, date: string) {
        this.id = uuid.v6();
        this.name = name;
        this.date = date;
    }
}