import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Tweet } from './components/Tweet'
import { Sparkle } from 'phosphor-react'

import './global.css';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { Separator } from './components/Separator';

const tweets = [
  'Hello, World!',
  'This is a tweet!',
  'This is another tweet!',
];

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="layout">
      <Sidebar />

      <div className="content">
        <main className="timeline">
          <Header title={'Home'} />

          <form className="new-tweet-form">
            <label htmlFor="tweet">
              <img src="https://github.com/felipecastrosales.png" alt="Avatar" />
              <textarea id="tweet" placeholder="What's happening?" />
            </label>
              <button type="submit">Tweet</button>
          </form>

          <Separator />

          {/* <Tweet content={tweets[0]} />
          <Tweet content={tweets[1]} />
          <Tweet content={tweets[2]} /> */}

          {
            tweets.map((tweet, index) => (
              <Tweet key={index} content={tweet} />
            ))
          }
        </main>
      </div>
    </div>
  </StrictMode>,
)