import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Tweet } from './components/Tweet'
import { Bell, BookmarkSimple, DotsThree, DotsThreeCircle, Envelope, FileText, Hash, House, Sparkle, User } from 'phosphor-react'

import './global.css';

import twitterLogo from './assets/logo-twitter.svg'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="layout">
      <aside className="sidebar">
        <img className="logo" src={twitterLogo} alt="Twitter" />
        
        <nav className="main-navigation">
          <a className="active" href="">
            <House weight="fill" size={24} />
            Home
          </a>
          <a href="">
            <Hash/>
            Explore
          </a>
          <a href="">
            <Bell />
            Notifications
          </a>
          <a href="">
            <Envelope />
            Messages
          </a>
          <a href="">
            <BookmarkSimple />
            Bookmarks
          </a>
          <a href="">
            <FileText />
            Lists
          </a>
          <a href="">
            <User />
            Profile
          </a>
          <a href="">
            <DotsThreeCircle />
            More
          </a>
        </nav>
        
        {/* <button>Tweet</button> */}
        <button className="new-tweet" type="button">
          Tweet
        </button>
      </aside>
      <div className="content">
        <main className="timeline">
          <div className="timeline-header">
            Home
            <Sparkle />
          </div>

          <form className="new-tweet-form">
            <label htmlFor="tweet">
              <img src="https://avatars.githubusercontent.com/u/59374587?v=4" alt="Avatar" />
              <textarea id="tweet" placeholder="What's happening?" />
            </label>
              <button type="submit">Tweet</button>
          </form>
        </main>
      </div>
    </div>
  </StrictMode>,
)