import React from "react";
import { useTodo } from "../context/useTodo";

interface ItemProps {
    title: string;
    completed: boolean;
    id: string;
}

const TodoItem: React.FC<ItemProps> = (props) => {
    const { updateTodoHandler, removeOneTodo } = useTodo();
    const trashIcon = <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg>;
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
            <button onClick={() => removeOneTodo(props.id)} className="trash-btn"></button>
        </li>
    );
}

export default TodoItem;