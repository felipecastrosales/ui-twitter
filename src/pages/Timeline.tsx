import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Tweet } from "../components/Tweet";

import './Timeline.css';

const tweets = [
  'Hello, World!',
  'This is a tweet!',
  'This is another tweet!',
];

export function Timeline() {
  return (
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

    {
      tweets.map((tweet, index) => (
        <Tweet key={index} content={tweet} />
      ))
    }
  </main>
  )
}