//import { useState } from 'react';
import './App.css';
import FormTask from './components/FormTask/FormTask';
import ListTask from './components/ListTask/ListTask';

export const App = () => {
  //const [toEdit, setToEdit] = useState('');

  return (
    <div className='App'>
      <h1>Lista de tareas</h1>
      <FormTask />
      <ListTask />
    </div>
  );
};
