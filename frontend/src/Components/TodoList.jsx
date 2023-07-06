import { useState, useEffect } from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, handleToggle, handleDelete, handleEdit }) {
    const [count, setcount] = useState()
    useEffect(() => {
        if (todos) {
            setcount((todos.filter(todo => todo.completed === true)).length)
        }
    }, [todos])


    return (
        <div className="todo-list">
            {todos && (
                <>
                < div className="count">
                    <div className="total">
                        Total Tasks: {todos.length}
                    </div>
                    <div className="complete">
                        Completed Tasks:{count}
                    </div>
                </div>
                    <hr style={{ width: '100%', marginBottom: 20, fontSize: 10 }} />
                </>
            )}

            {todos && todos.map((todo) => (
                <TodoItem
                    key={todo._id}
                    todo={todo}
                    handleToggle={handleToggle}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                />
            ))}
        </div>
    );
}
export default TodoList