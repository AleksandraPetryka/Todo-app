import React, {createContext, useState} from 'react';
import Todo from "../models/todo";

const data = [
    new Todo('Complete online JavaScript course'),
    new Todo ('Jog around the park 3x'),
    new Todo ('10 minutes meditation'),
    new Todo ('Read for 1 hour'),
    new Todo ('Pick up groceries'),
    new Todo ('Complete Todo App on Frontend Mentor')
];

interface TodoContextProps {
    items: Todo[];
    addTodoHandler: (todoText: string) => void;
    updateTodoHandler: (todoId: string) => void;
    removeTodoHandler: (todoId: string) => void;

}
export const TodoContext = createContext<TodoContextProps | undefined>(undefined)

export const TodoProvider = (props: { children: React.ReactNode }) => {
    const [todos, setTodos] = useState<Todo[]>(data);

    const addTodoHandler = (todoText: string) => {
        const newTodo = new Todo (todoText);
        console.log(newTodo);

        setTodos((prevTodos) => {
            return prevTodos.concat(newTodo);
        });
    };

    const updateTodoHandler = (todoId: string) => {
        setTodos((prevTodos) => {
            return prevTodos.map(todo => {
                if (todo.id === todoId) {
                    return {...todo, completed: !todo.completed};
                }
                return todo;
            });
        });
    };

    const removeTodoHandler = (todoId: string) => {
        setTodos((prevTodos) => {
            return prevTodos.filter(todo => todo.id !== todoId);
        });
    }
    const value: TodoContextProps = {
        items: todos,
        addTodoHandler,
        updateTodoHandler,
        removeTodoHandler
    }

    return (
        <TodoContext.Provider value={value}>
            {props.children}
        </TodoContext.Provider>
    )
}
