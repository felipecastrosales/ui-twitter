import { FormEvent, useState } from "react";
import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Tweet } from "../components/Tweet";

import './Timeline.css';

export function Timeline() {
  const [newTweet, setNewTweet] = useState('')
  const [tweets, setTweets] = useState([
    'Hello, World!',
    'This is a tweet!',
    'This is another tweet!',
  ])

  function createNewTweet(event: FormEvent) {
    event.preventDefault()

    const tweet = newTweet
    tweets.push(tweet)

    setTweets([...tweets])
    setNewTweet('')

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
          value={newTweet}
          onChange={(event) => {
            setNewTweet(event.target.value)
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