import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Tweet } from './components/Tweet'

import './global.css'

// typescript -> tool for static type checking
// java, dart... 
// static type checking -> type checking at compile time
//                         when is the code being compiled and developed

const editUser = true

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  </StrictMode>,
)