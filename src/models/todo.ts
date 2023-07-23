class Todo {
    id: string
    title: string;
    completed: boolean;
    constructor(todoText: string) {
        this.id = new Date().toISOString();
        this.title = todoText;
        this.completed = false;
    }
}

export default Todo;