import React from "react";
import TodoItem from "./TodoItem";
import { useTodo } from "../context/useTodo";



const Todos = () => {
    const { items } = useTodo();
    return (
        <ul>
            {items.map((item) => (
                <TodoItem completed={item.completed} title={item.title} id={item.id}/>
            ))}
        </ul>
    );
}

export default Todos;