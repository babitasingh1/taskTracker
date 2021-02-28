import { React } from 'react';

export default function Header({ showAddTask, onShowAddTask }) {
  return (
    <header>
      <h1>Task Tracker</h1>
      {showAddTask ? (
        <button onClick={onShowAddTask} style={{ backgroundColor: 'red' }}>
          {' '}
          Close
        </button>
      ) : (
        <button onClick={onShowAddTask}>Add</button>
      )}
    </header>
  );
}
