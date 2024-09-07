import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Tweet } from './components/Tweet'
import { Sparkle } from 'phosphor-react'

import './global.css';
import { Sidebar } from './components/Sidebar';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="layout">
      <Sidebar />

      <div className="content">
        <main className="timeline">
          <div className="timeline-header">
            Home
            <Sparkle />
          </div>

          <form className="new-tweet-form">
            <label htmlFor="tweet">
              <img src="https://github.com/felipecastrosales.png" alt="Avatar" />
              <textarea id="tweet" placeholder="What's happening?" />
            </label>
              <button type="submit">Tweet</button>
          </form>

          <div className="separator" />

          <Tweet />
          <Tweet />
          <Tweet />
        </main>
      </div>
    </div>
  </StrictMode>,
)