import { RiCheckboxBlankCircleLine, RiCheckboxCircleLine } from 'react-icons/ri';
import { BiTrash } from 'react-icons/bi';
import { FaEdit } from 'react-icons/fa';
function TodoItem({ todo, handleToggle, handleDelete, handleEdit }) {
    return (
        <div className="todo-item">
            <div className="checkbox" onClick={() => handleToggle(todo)}>
                {todo.completed ? (
                    <RiCheckboxCircleLine size={24} color="#7289da" />
                ) : (
                    <RiCheckboxBlankCircleLine size={24} color="#99aab5" />
                )}
            </div>
            <div className={`text ${todo.completed ? 'completed' : ''}`}>
                {todo.name}
            </div>
            <div className="delete" onClick={() => handleEdit(todo)}>
                <FaEdit size={24} color="#99aab5" />
            </div>
            <div className="delete" onClick={() => handleDelete(todo._id)}>
                <BiTrash size={24} color="#99aab5" />
            </div>
        </div>
    );
}
export default TodoItem