import { useTodo } from "../context/useTodo";

const TodoControlPanel = () => {
    const { removeCompletedTodos } = useTodo();

    return (
        <div className='dashboard'>
            <div className="items-left">Items left</div>
            <div className="filters">
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
            <div className="clear-completed">
                <button onClick={removeCompletedTodos}>Clear Completed</button>
            </div>
        </div>
    );
}

export default TodoControlPanel;