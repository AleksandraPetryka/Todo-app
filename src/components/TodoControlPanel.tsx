import { useTodo } from "../context/useTodo";

const TodoControlPanel = () => {
    const { removeCompletedTodos, setFilterStatus, filterStatus } = useTodo();

    return (
        <div className='dashboard'>
            <div className="items-left">Items left</div>
            <div className="filters">
                <button
                    className={filterStatus === 'all'? 'active' : ''}
                    onClick={() => setFilterStatus('all')}
                >
                    All
                </button>
                <button
                    className={filterStatus === 'active'? 'active' : ''}
                    onClick={() => setFilterStatus('active')}
                >
                    Active
                </button>
                <button
                    className={filterStatus === 'completed'? 'active' : ''}
                    onClick={() => setFilterStatus('completed')}
                >
                    Completed
                </button>
            </div>
            <div className="clear-completed">
                <button onClick={removeCompletedTodos}>Clear Completed</button>
            </div>
        </div>
    );
}

export default TodoControlPanel;