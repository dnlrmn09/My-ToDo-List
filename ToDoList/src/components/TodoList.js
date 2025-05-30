import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export const TodoList = ({ item, onDelete, onToggle }) => {
  return (
    <div className="task-item">
      <input 
        type="checkbox"
        checked={item.completed}
        onChange={() => onToggle(item.id)}
      />
      <p className={item.completed ? 'done' : 'pending'}>
        {item.text}
      </p>
      <FontAwesomeIcon
        className="delete-icon"
        icon={faTrash}
        onClick={() => onDelete(item.id)}
      />
    </div>
  );
};