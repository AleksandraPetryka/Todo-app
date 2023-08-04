import React from "react";
import { useTodo } from "../context/useTodo";

interface ItemProps {
  title: string;
  completed: boolean;
  id: string;
}

const TodoItem: React.FC<ItemProps> = (props) => {
  const { updateTodoHandler, removeOneTodo } = useTodo();
  return (
    <li className={props.completed ? "completed" : "uncompleted"} id={props.id}>
      <input type="checkbox" />
      <span
        className={props.completed ? "completed" : "uncompleted"}
        onClick={() => {
          updateTodoHandler(props.id);
        }}
      ></span>
      <p>{props.title}</p>
      <button
        onClick={() => removeOneTodo(props.id)}
        className="trash-btn"
      ></button>
    </li>
  );
};

export default TodoItem;
