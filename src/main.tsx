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
      {/* <input type="time" /> */}
      {/* <Tweet />
      <Tweet /> */}
      {/* <Tweet user="test" content="Hello, world!" />
      <Tweet user="test1" content="ok" />
      <Tweet user="test2" content="hello" /> */}

      {/* <Tweet user="test" content="Hello, world!" />
      <Tweet user="test1" content="ok" />
      <Tweet user="test2" content="hello" /> */}

      <Tweet user="test">
          Hello, world!
      </Tweet>

      <Tweet user="test1">
          ok
      </Tweet>
      
      <Tweet user="test2">
          hello
      </Tweet>
    </div>
  </StrictMode>,
)