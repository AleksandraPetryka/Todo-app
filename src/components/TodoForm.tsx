import React from "react";
import { useRef } from "react"

const TodoForm: React.FC = (props) => {
    const todoTextInputRef = useRef<HTMLInputElement>();
    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const enteredText = todoTextInputRef.current!.value;

        if (enteredText.trim().length === 0) {
            //throw an error
            return;
        }
    };

    return (
        <form onSubmit={submitHandler}>
        <label htmlFor='text' >Create new todo...</label>
            <input type='text' id='text' ref={todoTextInputRef} />
        </form>
    );
};

export default TodoForm;