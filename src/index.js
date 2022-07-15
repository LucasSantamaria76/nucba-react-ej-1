import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { App } from './App.jsx';
import { ProviderToDo } from './store/contextToDo';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <ProviderToDo>
      <App />
    </ProviderToDo>
  </StrictMode>
);
