import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Tweet } from './components/Tweet'

const editUser = true

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    {/* <h1>Hello, world!</h1> */}
    <div>
      {/* <h1>Hello, world!</h1> */}
      {/* <button onClick={() => console.log('clicked')}>Click me</button> */}
      {/* <button>{editUser ? 'Save' : 'Edit'}</button> */}
      <Tweet />
      <Tweet />
    </div>
  </StrictMode>,
)
