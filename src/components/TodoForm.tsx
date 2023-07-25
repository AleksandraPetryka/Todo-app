import React from "react";
import { useRef } from "react";

const TodoForm: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
    const todoTextInputRef = useRef<HTMLInputElement>(null);
    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const enteredText = todoTextInputRef.current!.value;

        if (enteredText.trim().length === 0) {
            //throw an error
            return;
        }
        props.onAddTodo(enteredText);
    };

    return (
        <div className='form-box'>
            <span className='checkbox'></span>
            <form onSubmit={submitHandler}>
                <input type='text' id='text' placeholder="Create new todo..." ref={todoTextInputRef} />
            </form>
        </div>

    );
};

export default TodoForm;