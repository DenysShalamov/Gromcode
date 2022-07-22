import { renderTasks } from './renderer.js';
import { setItem } from './storage.js';
import { createTasks, getTasksList } from './tasksGateway.js';

export const onCreateTask = () => {
  const taskInputField = document.querySelector('.task-input');

  const text = taskInputField.value;

  if (!text) {
    return;
  }

  taskInputField.value = '';

  const newTask = {
    text,
    done: false,
    createDate: new Date().toISOString(),
    id: Math.random().toString(),
  };

  createTasks(newTask)
    .then(() => getTasksList())
    .then(newTasksList => {
      setItem('tasksList', newTasksList);
      renderTasks();
    });
};
