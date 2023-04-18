import { TextInput, Button, Space, Badge } from '@mantine/core';
import { useState } from 'react';
function App() {
  const [tasks, setTasks] = useState(['Task 1', 'Task2', 'Task3']);
  //usestate return two value
  // const tasks = ['task1', 'task2', 'task3'];
  const addTask = (taskToAdd) => {
    const newTasks = [...tasks, taskToAdd]; //spred operator work like push
    //[tasks.push(taskToAd]) or
    console.log(newTasks)
    setTasks(newTasks);
  };
  return (
    <div className="App">
      <TextInput
        placeholder="Task Name"
        label="Task"
        description="Please Enter Task"
        withAsterisk
      />
      <Space h="md" />
      <Button onClick={() => addTask('Hello')}>Add Task</Button>
      <div>
        {tasks.map((task, index) => (
          <Badge>
            {index + 1}:{task}
          </Badge>
        ))}
      </div>
    </div>
  );
}
export default App;
