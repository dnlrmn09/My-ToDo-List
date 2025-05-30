import React, { useState } from 'react';

export const TaskForm = ({ onAddTask }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    onAddTask(input);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="task-input"
        placeholder="Create a new task..."
      />
      <button type="submit" className="task-button">Add</button>
    </form>
  );
};