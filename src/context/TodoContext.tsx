import React, {createContext, MouseEventHandler, useMemo, useState} from 'react';
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
    removeCompletedTodos: () => void;
    setFilterStatus: (status: string) => void;

}
export const TodoContext = createContext<TodoContextProps | undefined>(undefined)

export const TodoProvider = (props: { children: React.ReactNode }) => {
    const [todos, setTodos] = useState<Todo[]>(data);
    const [filterStatus, setFilterStatus] = useState("all");

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

    const filteredTodos = useMemo(() => {
        switch (filterStatus) {
            case "active":
                return todos.filter((todo) => !todo.completed);

            case "completed":
                return todos.filter((todo) => todo.completed);

            default:
                return todos;
        }
    }, [todos, filterStatus]);

    const removeCompletedTodos = () => {
        setTodos(todos.filter((todo) => !todo.completed));
        setFilterStatus("all");
    };

    const value: TodoContextProps = {
        items: filteredTodos,
        addTodoHandler,
        updateTodoHandler,
        removeCompletedTodos,
        setFilterStatus
    }

    return (
        <TodoContext.Provider value={value}>
            {props.children}
        </TodoContext.Provider>
    )
}
