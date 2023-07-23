import './App.css';
import Todos from "./components/Todos";
import Todo from "./models/todo";
import TodoForm from "./components/TodoForm";


function App() {
    const todos = [
        new Todo('Learn React'),
        new Todo('Learn TypeScript')
    ];

  return (
    <div>
        <TodoForm />
      <Todos items={todos}/>
    </div>
  );
}

export default App;
