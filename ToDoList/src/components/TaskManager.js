import React, { useState } from 'react';
import { TodoList } from './TodoList';  // Adjust your import path if needed
import { TaskForm } from './TaskForm';  // Adjust your import path if needed
import { v4 as uuidv4 } from 'uuid';

export const TaskManager = () => {
  const [taskList, setTaskList] = useState([]);
  const [deletedTasks, setDeletedTasks] = useState([]);

  const handleAddTask = (text) => {
    const newTask = {
      id: uuidv4(),
      text,
      completed: false,
    };
    setTaskList([...taskList, newTask]);
  };

  const handleDeleteTask = (id) => {
    const deletedTask = taskList.find((task) => task.id === id);
    if (deletedTask) {
      setDeletedTasks([...deletedTasks, deletedTask]);
      setTaskList(taskList.filter((task) => task.id !== id));
    }
  };

  const handleToggleStatus = (id) => {
    setTaskList(
      taskList.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="task-wrapper">
      <h1>To-Do List</h1>
      <TaskForm onAddTask={handleAddTask} />

      <h2>Active Tasks</h2>
      {taskList.filter((task) => !task.completed).length === 0 && <p style={{ color: "#567575" }}>No active tasks</p>}
      {taskList
        .filter((task) => !task.completed)
        .map((task) => (
          <TodoList
            key={task.id}
            item={task}
            onDelete={handleDeleteTask}
            onToggle={handleToggleStatus}
          />
        ))}

      <h2>Completed Tasks</h2>
      {taskList.filter((task) => task.completed).length === 0 && <p style={{ color: "#567575" }}>No completed tasks</p>}
      {taskList
        .filter((task) => task.completed)
        .map((task) => (
          <TodoList
            key={task.id}
            item={task}
            onDelete={handleDeleteTask}
            onToggle={handleToggleStatus}
          />
        ))}

        {/* Total of Deleted tasks*/}
      <div className="deleted-summary">
        Deleted Tasks: {deletedTasks.length}
      </div>

    </div>
  );
};