import "./App.css";
import Todos from "./components/Todos";
import TodoForm from "./components/TodoForm";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TodoControlPanel from "./components/TodoControlPanel";

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(true);

  const themeClass: string = darkMode ? "dark" : "light";

  return (
    <div className={`wrapper ${themeClass}`}>
      <div className="container">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <main>
          <TodoForm />
          <section className="todo-list">
            <Todos />
            <TodoControlPanel />
          </section>
          <section className="control-for-mobile">
            <TodoControlPanel />
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
