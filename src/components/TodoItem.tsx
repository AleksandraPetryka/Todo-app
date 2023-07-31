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
                type="checkbox"
            />
            <span className={props.completed ? "completed" : "uncompleted"} onClick={(event: React.MouseEvent) => {updateTodoHandler(props.id)}}></span>
            <p>{props.title}</p>
        </li>
    );
}

export default TodoItem;