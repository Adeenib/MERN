
import { useState, useEffect } from 'react';
import Form from './components/Form';
import Tasks from './components/Tasks'

function App() {
  let arr;
  let initialID;
  localStorage.getItem('tasks') ? arr = JSON.parse(localStorage.getItem('tasks')) : arr = [];
  localStorage.getItem('id') ? initialID = localStorage.getItem('id') : initialID = 0;
  // try {
  //   arr = JSON.parse(localStorage.getItem('tasks'));

  //   initialID = localStorage.getItem('id');
  // }
  // catch (error) {
  //   arr = [];

  //   initialID = 0;
  // }

  const [tasks, setTasks] = useState(arr);
  const [autoId, setAutoId] = useState(initialID);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    localStorage.setItem('id', autoId);
  });

  const addTask = (text) => {
    const task = { "text": text, "completed": false, "id": autoId };
    setTasks([...tasks, task]);
    setAutoId(autoId + 1);
  }

  const changeCompleted = (completed, id) => {
    const index = tasks.findIndex(obj => obj.id === id);
    setTasks([...tasks.slice(0, index), { ...tasks[index], "completed": completed }, ...tasks.slice(index + 1)])
  }

  const deleteTask = (id) => {
    const index = tasks.findIndex(obj => obj.id === id);
    setTasks([...tasks.slice(0, index), ...tasks.slice(index + 1)])
  }

  return (
    <div className="App">
      <Form addTask={addTask} />
      <Tasks tasks={tasks} changeCompleted={changeCompleted} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
