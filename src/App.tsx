import './App.css';
import Todos from "./components/Todos";
import Todo from "./models/todo";
import TodoForm from "./components/TodoForm";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [darkMode, setDarkMode] = useState<boolean>(true);

    const addTodoHandler = (todoText: string) => {
        const newTodo = new Todo (todoText);
        console.log(newTodo);

        setTodos((prevTodos) => {
            return prevTodos.concat(newTodo);
        });
    };

    const completeTodoHandler = (todoId: number) => {

    };

    const removeTodoHandler = (todoId: string) => {
        setTodos((prevTodos) => {
            return prevTodos.filter(todo => todo.id !== todoId);
        });
    }
    const themeClass: string = darkMode ? "dark" : "light";

    return (
        <div className={`wrapper ${themeClass}`}>
            <Header darkMode={darkMode} setDarkMode={setDarkMode} />
            <main>
                <TodoForm onAddTodo={addTodoHandler} />
                <Todos items={todos}/>
            </main>
            <Footer/>
        </div>
    );
}



export default App;
