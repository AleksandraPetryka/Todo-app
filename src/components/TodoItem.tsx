import React from "react";
import Todo from "../models/todo";
import { useTodo } from "../context/useTodo";

interface ItemProps {
    title: string;
    completed: boolean;
    id: string;
}

const TodoItem: React.FC<ItemProps> = (props) => {
    const { updateTodoHandler } = useTodo();
    return (
        <li
            className={props.completed ? "completed" : "uncompleted"}
            id={props.id}
        >
            <input
                onChange={(event: React.ChangeEvent) => {updateTodoHandler(props.id)}}
                type="checkbox"
                checked={props.completed}
            />
            <p>{props.title}</p>
        </li>
    );
}

export default TodoItem;