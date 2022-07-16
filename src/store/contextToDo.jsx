import { createContext, useContext, useReducer } from 'react';
import { initialState, reducerTodo } from './reducer';

const ContextToDo = createContext();

export const ProviderToDo = ({ children }) => {
  const [state, dispatch] = useReducer(reducerTodo, initialState);

  return <ContextToDo.Provider value={{ state, dispatch }}>{children}</ContextToDo.Provider>;
};

export const useToDo = () => useContext(ContextToDo);
