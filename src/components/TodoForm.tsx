import React, {useEffect} from "react";
import {useRef} from "react";
import { useTodo } from "../context/useTodo";


const TodoForm = () => {
    const todoTextInputRef = useRef<HTMLInputElement>(null);
    const { addTodoHandler } = useTodo();

    useEffect(() => {
        todoTextInputRef.current?.focus();
    }, []);
    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const enteredText = todoTextInputRef.current!.value;

        if (enteredText.trim().length === 0) {
            //throw an error
            return;
        }
        addTodoHandler(enteredText);
    };

    return (
        <div className='form-box'>
            <input type='checkbox' className='checkbox'></input>
            <form onSubmit={submitHandler}>
                <input type='text' id='text' placeholder="Create new todo..." ref={todoTextInputRef}/>
            </form>
        </div>

    );
};

export default TodoForm;