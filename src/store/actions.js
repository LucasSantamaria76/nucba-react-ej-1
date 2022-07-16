import { v4 as uuidv4 } from 'uuid';

export const Types = {
  SET_TASKS: 'SET_TASKS',
  ADD_TASK: 'ADD_TASK',
  DELETE_TASK: 'DELETE_TASK',
  EDIT_TASK: 'EDIT_TASK',
  DELETE_TODO: 'DELETE_TODO',
};

export const setTasks = (tasks) => ({
  type: Types.SET_TASKS,
  payload: tasks,
});

export const addTask = (title, id = '') => ({
  type: Types.ADD_TASK,
  payload: {
    id: id ? id : uuidv4(),
    title,
  },
});

export const deleteTask = (id, all = false) => ({
  type: all ? Types.DELETE_TODO : Types.DELETE_TASK,
  payload: id,
});

export const editTask = (id) => ({
  type: Types.EDIT_TASK,
  payload: id,
});
