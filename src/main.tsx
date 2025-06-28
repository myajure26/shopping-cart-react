import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/index.css';
import GuitarApp from './GuitarApp.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GuitarApp />
  </StrictMode>,
)
