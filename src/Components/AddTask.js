import { React, useState } from 'react';

export default function AddTask({ onAdd }) {
  const [taskName, settaskName] = useState('');
  const [taskDay, settaskDay] = useState('');
  const [reminder, setReminder] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (!taskName) {
      alert('please input valid value');
      return;
    }
    let task = {
      //id will be generated by server
      title: taskName,
      day: taskDay,
      reminder: reminder,
    };

    settaskName('');
    settaskDay('');
    setReminder('');

    onAdd(task);
  };
  return (
    <form style={{ marginLeft: 20 }} onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Task</label>
        <br></br>
        <input
          className='inputFields'
          type='text'
          value={taskName}
          placeholder='taskname'
          onChange={(e) => {
            settaskName(e.target.value);
          }}
        ></input>
      </div>
      <div className='form-control'>
        <label>Day</label>
        <br></br>
        <input
          className='inputFields'
          type='text'
          value={taskDay}
          placeholder='day'
          onChange={(e) => {
            settaskDay(e.target.value);
          }}
        ></input>
      </div>
      <div className='form-control'>
        <label>Set Reminder</label>
        <input
          type='checkbox'
          value={reminder}
          onChange={(e) => {
            setReminder(e.target.checked);
          }}
        ></input>
      </div>
      <input className='inputFields' type='submit' value='save task'></input>
    </form>
  );
}
