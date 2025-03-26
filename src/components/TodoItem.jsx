import React from 'react';

function TodoItem({ todo, onUpdate, onDelete }) {
    const handleStatusChange = (e) => {
        onUpdate({ ...todo, completed: e.target.checked });
    };

    return (
        <li>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={handleStatusChange}
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                {todo.text}
            </span>
            <button onClick={() => onDelete(todo.id)}>Delete</button>
            <button onClick={() => {
                const newText = prompt("Enter new text:", todo.text);
                if (newText !== null) {
                    onUpdate({ ...todo, text: newText });
                }
            }}>Edit</button>
        </li>
    );
}

export default TodoItem;