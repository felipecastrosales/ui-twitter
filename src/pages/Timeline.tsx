import { FormEvent, useState } from "react";
import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Tweet } from "../components/Tweet";

import './Timeline.css';

let newTweet = '';

export function Timeline() {
  const [tweets, setTweets] = useState([
    'Hello, World!',
    'This is a tweet!',
    'This is another tweet!',
  ])

  function createNewTweet(event: FormEvent) {
    // console.log('Creating new tweet... 🐦 | event', event)
    // console.log(event)
    event.preventDefault()

    const tweet = newTweet

    tweets.push(tweet)

    setTweets([...tweets])

    console.log('New tweet:', tweet)
    console.log('Tweets:', tweets)
  }

  return (
    <main className="timeline">
    <Header title={'Home'} />

    <form onSubmit={createNewTweet} className="new-tweet-form">
      <label htmlFor="tweet">
        <img src="https://github.com/felipecastrosales.png" alt="Avatar" />
        <textarea
          id="tweet"
          placeholder="What's happening?"
          onChange={(event) => {
            // console.log('Creating new tweet... 🐦 | event', event)
            newTweet = event.target.value
          }}
        />
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