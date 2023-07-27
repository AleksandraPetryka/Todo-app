import React from "react";
import Todo from "../models/todo";

interface ItemProps {
    title: string;
    completed: boolean;
    key: string;
    setIsCompleted: (isCompleted: boolean) => void;
}

const TodoItem: React.FC<ItemProps> = (props) => {
    return (
        <li className={props.completed ? "completed" : "uncompleted"}>
            <input onChange={(event: React.ChangeEvent) => props.setIsCompleted(!props.completed)} type="checkbox" checked={props.completed}/>
            <p>{props.title}</p>
        </li>
    );
}

export default TodoItem;