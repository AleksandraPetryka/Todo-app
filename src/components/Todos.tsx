import React from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";

const Todos: React.FC<{ items: Todo[] }> = (props) => {
    return (
        <ul>
            {props.items.map((item) => (
                <TodoItem title={item.title} key={item.id}/>
            ))}
        </ul>
);
}

export default Todos;