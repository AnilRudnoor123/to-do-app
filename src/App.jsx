import { TextInput, Button, Space, Badge, Grid } from '@mantine/core';
import { useState } from 'react';
import AddTask from './components/AddTask';
import Task from './components/Task';
function App() {
  const [tasks, setTasks] = useState(['Task 1', 'Task2', 'Task3']);
  //usestate return two value
  // const tasks = ['task1', 'task2', 'task3'];
  const addTask = (taskToAdd) => {
    const newTasks = [...tasks, taskToAdd]; //spred operator work like push
    //[tasks.push(taskToAd]) or
    setTasks(newTasks);
  };

  const deleteTask = (task) => {
    const newTasks = [...tasks];
    newTasks.splice(newTasks.indexOf(task), 1);
    setTasks(newTasks);
  };
  return (
    <div className="App">
      <AddTask onAddTask={addTask} />
      <Space h="md" />
      {/* <Button onClick={() => addTask('Hello')}>Add Task</Button> */}
      <div>
        {tasks.map((task, index) => (
          <Task task={task} index={index} onDelete={deleteTask} />
        ))}
      </div>
    </div>
  );
}
export default App;
