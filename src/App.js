import React, { useState, useEffect } from 'react';
import Tasks from './Components/Tasks';
import AddTask from './Components/AddTask';
import Header from './Components/Header';
import './App.css';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [showAddTask, setShowAddTask] = useState(false);

  useEffect(() => {
    const fetchTasks = async () => {
      const res = await fetch('http://localhost:5000/tasks');
      const data = await res.json();

      setTasks(data);
    };

    fetchTasks();
  }, []);

  const handleDelete = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',
    });

    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleAdd = async (task) => {
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(task),
    });
    const newtask = await res.json();

    setTasks([...tasks, newtask]);
  };

  const handleShowAddTask = () => {
    setShowAddTask(!showAddTask);
  };

  const handleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className='taskTracker'>
      <Header showAddTask={showAddTask} onShowAddTask={handleShowAddTask} />
      {showAddTask ? <AddTask onAdd={handleAdd} /> : ''}
      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          onDelete={handleDelete}
          onReminder={handleReminder}
        />
      ) : (
        'No tasks to show'
      )}
    </div>
  );
}
