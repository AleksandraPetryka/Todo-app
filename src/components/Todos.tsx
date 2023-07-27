import React from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import {useState} from "react";

const Todos: React.FC<{ items: Todo[] }> = (props) => {
    const [isCompleted, setIsCompleted] = useState<boolean>(false);

    return (
        <ul>
            {props.items.map((item) => (
                <TodoItem setIsCompleted={setIsCompleted} completed={isCompleted} title={item.title} key={item.id}/>
            ))}
        </ul>
    );
}

export default Todos;