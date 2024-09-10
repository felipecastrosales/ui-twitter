import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Sidebar } from './components/Sidebar';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';

import './global.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="layout">
      <Sidebar />

      <div className="content">
        <RouterProvider router={router} />
      </div>
    </div>
  </StrictMode>,
)