import "./App.css";
import Todos from "./components/Todos";
import TodoForm from "./components/TodoForm";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useTheme } from "./context/useTheme";
import TodoControlPanel from "./components/TodoControlPanel";

function App() {
  const { themeClass } = useTheme();

  return (
    <div className={`wrapper ${themeClass}`}>
      <div className="container">
        <Header />
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
