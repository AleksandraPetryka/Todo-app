import { nanoid } from 'nanoid';
class Todo {
    id: string
    title: string;
    completed: boolean;
    constructor(todoText: string) {
        this.id = nanoid();
        this.title = todoText;
        this.completed = false;
    }
}

export default Todo;