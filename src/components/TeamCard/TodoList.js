import React, { useState } from 'react';
import './TodoList.css';

function TodoList() {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);

  const handleAdd = (e) => {
    e.preventDefault();
    if (task.trim()) {
      setTodos([...todos, { id: Date.now(), text: task, completed: false }]);
      setTask('');
    }
  };

  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="todo-container">
      <h2 className="todo-heading">📋 My To-Do List</h2>
      <form onSubmit={handleAdd} className="todo-form">
        <input
          type="text"
          placeholder="Enter a task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className={todo.completed ? 'completed' : ''}>
            <span>{todo.text}</span>
            <div className="buttons">
  <button onClick={() => toggleComplete(todo.id)}>
    {todo.completed ? '↩️ Undo' : '✅ Complete'}
  </button>
  <button className="delete" onClick={() => handleDelete(todo.id)}>
    ❌ Delete
  </button>
</div>

          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
