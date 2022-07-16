import { useEffect } from 'react';
import './App.css';
import FormTask from './components/FormTask/FormTask';
import ListTask from './components/ListTask/ListTask';
import { setTasks } from './store/actions';
import { useToDo } from './store/contextToDo';

export const App = () => {
  const { dispatch } = useToDo();

  const getTasks = () => {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    console.log(tasks);
    if (tasks) {
      dispatch(setTasks(tasks));
    }
  };

  useEffect(() => {
    getTasks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='App'>
      <h1>Lista de tareas</h1>
      <FormTask />
      <ListTask />
    </div>
  );
};
