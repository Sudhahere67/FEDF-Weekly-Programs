import React, { useState } from "react";
import AddTask from "./AddTask";
import Display from "./Display";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>To-Do List Application</h1>

      <AddTask addTask={addTask} />

      <Display tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
}

export default App;