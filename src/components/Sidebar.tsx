import { Bell, BookmarkSimple, DotsThreeCircle, Envelope, FileText, Hash, House, User } from 'phosphor-react'
import { Link } from 'react-router-dom';

import twitterLogo from '../assets/logo-twitter.svg'

import './Sidebar.css'

export function Sidebar() {
  return (
    <aside className="sidebar">
    <img className="logo" src={twitterLogo} alt="Twitter" />
    <nav className="main-navigation">
      <Link className="active" to="/">
        <House weight="fill" size={24} />
        Home
      </Link>
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
  );
}