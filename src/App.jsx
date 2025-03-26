import React, { useState, useEffect } from 'react';
import TodoItem from './components/TodoItem';
import TodoForm from './components/TodoForm';
import './App.css';  // Import your CSS file (optional)

function App() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        // Generate 10 initial tasks on mount
        const initialTodos = Array.from({ length: 10 }, (_, i) => ({
            id: i + 1,
            text: `Task ${i + 1}`,
            completed: false,
        }));
        setTodos(initialTodos);
    }, []); // Empty dependency array ensures this runs only once on mount

    const addTodo = (text) => {
        const newTodo = {
            id: todos.length > 0 ? Math.max(...todos.map(t => t.id)) + 1 : 1, // Generate unique ID
            text,
            completed: false,
        };
        setTodos([...todos, newTodo]);
    };

    const updateTodo = (updatedTodo) => {
        setTodos(todos.map(todo =>
            todo.id === updatedTodo.id ? updatedTodo : todo
        ));
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div className="App">
            <h1>Todo List</h1>
            <TodoForm onAdd={addTodo} />
            <ul>
                {todos.map(todo => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onUpdate={updateTodo}
                        onDelete={deleteTodo}
                    />
                ))}
            </ul>
        </div>
    );
}

export default App;