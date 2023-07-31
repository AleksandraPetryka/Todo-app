import { useTodo } from "../context/useTodo";

const TodoControlPanel = () => {
    const { removeCompletedTodos, setFilterStatus } = useTodo();

    return (
        <div className='dashboard'>
            <div className="items-left">Items left</div>
            <div className="filters">
                <button  onClick={() => setFilterStatus('all')}>All</button>
                <button onClick={() => setFilterStatus('active')}>Active</button>
                <button onClick={() => setFilterStatus('completed')}>Completed</button>
            </div>
            <div className="clear-completed">
                <button onClick={removeCompletedTodos}>Clear Completed</button>
            </div>
        </div>
    );
}

export default TodoControlPanel;