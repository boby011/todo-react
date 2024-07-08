import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleStatusChange = (id, status) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: status } : todo
    );
    setTodos(updatedTodos);
  };

  const handleDelete = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    const newTodo = {
      id: todos.length + 1,
      title,
      description,
      completed: false
    };
    setTodos([...todos, newTodo]);
    setTitle('');
    setDescription('');
  };

  return (
    <div className="todo-container">
      <h1>Todo List</h1>
      <form onSubmit={handleAddTodo} className="add-todo-form">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <button type="submit">Add Todo</button>
      </form>
      {todos.length > 0 && (
        <div className="todo-list">
          {todos.map(todo => (
            <div key={todo.id} className="todo-item">
              <h2>{todo.title}</h2>
              <p>{todo.description}</p>
              <select
                value={todo.completed ? 'Completed' : 'Not Completed'}
                onChange={(e) => handleStatusChange(todo.id, e.target.value === 'Completed')}
              >
                <option value="Not Completed">Not Completed</option>
                <option value="Completed">Completed</option>
              </select>
              <button type="button" onClick={() => handleDelete(todo.id)}>Delete</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
