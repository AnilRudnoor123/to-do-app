import { TextInput, Button, Space, Badge, CloseButton } from '@mantine/core';

const Task = ({ task, index, onDelete }) => {
  return (
    <div>
      <Badge>
        {index + 1}:{task}
      </Badge>
      <Space h="md" />

      <CloseButton
        title="Close popover"
        size="xl"
        iconSize={20}
        onClick={onDelete}
      />
    </div>
  );
};
export default Task;
