import './App.css';
import Todos from "./components/Todos";
import Todo from "./models/todo";
import TodoForm from "./components/TodoForm";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TodoControlPanel from "./components/TodoControlPanel";

const data = [
    new Todo('Complete online JavaScript course'),
    new Todo ('Jog around the park 3x'),
    new Todo ('10 minutes meditation'),
    new Todo ('Read for 1 hour'),
    new Todo ('Pick up groceries'),
    new Todo ('Complete Todo App on Frontend Mentor')
];

function App() {
    const [todos, setTodos] = useState<Todo[]>(data);
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
            <div className='container'>
                <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
                <main>
                    <TodoForm onAddTodo={addTodoHandler}/>
                    <section className='todo-list'>
                        <Todos items={todos}/>
                        <TodoControlPanel/>
                    </section>
                    <section className='control-for-mobile'>
                        <TodoControlPanel/>
                    </section>
                </main>
                <Footer/>
            </div>
        </div>
    );
}



export default App;
