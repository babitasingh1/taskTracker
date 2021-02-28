import React from 'react';
import { FaTimes } from 'react-icons/fa';

export default function Tasks({ tasks, onDelete, onReminder }) {
  return (
    <div>
      {tasks.map((task, index) => (
        <div
          className={`task ${task.reminder ? 'reminder-border' : ''}`}
          key={index}
          onDoubleClick={() => onReminder(task.id)}
        >
          <p className='taskName'>
            {task.title}
            <FaTimes className='deleteIcon' onClick={() => onDelete(task.id)} />
          </p>
          <p>{task.day}</p>
        </div>
      ))}
    </div>
  );
}
