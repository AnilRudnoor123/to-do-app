import { TextInput, Button, Space } from '@mantine/core';
import { useState } from 'react';

const AddTask = ({ onAddTask }) => {
  const [task, setTask] = useState('');

  const addTask = () => {
    onAddTask(task);
    setTask('');
  };
  return (
    <div>
      <TextInput
        placeholder="Your name"
        label="Full name"
        value={task}
        onChange={(e) => setTask(e.currentTarget.value)}
        withAsterisk
      />
      <Button onClick={addTask} disabled={!task}>
        Add
      </Button>
    </div>
  );
};
export default AddTask;
