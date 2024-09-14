import { FormEvent, useState } from "react";
import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Tweet } from "../components/Tweet";

import './Status.css';

export function Status() {
  const [newAnswer, setNewAnswer] = useState('')
  const [answers, setAnswers] = useState([
    'My answer to the tweet',
    'This is another answer to the tweet',
    'This is a third answer to the tweet; it is a test to see how it looks like',
  ])

  function createNewAnswer(event: FormEvent) {
    event.preventDefault()

    const tweet = newAnswer
    answers.push(tweet)

    setAnswers([newAnswer, ...answers])
    setNewAnswer('')

    console.log('New tweet:', tweet)
    console.log('Tweets:', answers)
  }

  return (
    <main className="status">
    <Header title={'Tweet'} />

    <Tweet content={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo eos itaque sunt consectetur vitae enim ipsum aspernatur maiores cupiditate, voluptate inventore, aperiam omnis obcaecati ex quod commodi animi tenetur cumque?'} />

    <Separator />

    {/* <form className="answer-tweet-form"> */}
    <form 
      onSubmit={createNewAnswer}
      className="answer-tweet-form"
    >
      <label htmlFor="tweet">
        <img src="https://github.com/felipecastrosales.png" alt="Avatar" />
        <textarea
          id="tweet"
          placeholder="Tweet your answer"
          value={newAnswer}
          onChange={(event) => {
            setNewAnswer(event.target.value)
          }}
        />
      </label>
        <button type="submit">Answer</button>
    </form>


    {
      answers.map((answer, index) => (
        <Tweet key={index} content={answer} />
      ))
    }
  </main>
  )
}
