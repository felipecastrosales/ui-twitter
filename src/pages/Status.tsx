import { FormEvent, KeyboardEvent, useState } from "react";
import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Tweet } from "../components/Tweet";

import './Status.css';
import { PaperPlaneRight } from "phosphor-react";

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

  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter' && (event.metaKey || event.ctrlKey)) {
      setAnswers([newAnswer, ...answers])
      setNewAnswer('')
    }
  }

  return (
    <main className="status">
    <Header title={'Tweet'} />

    <Tweet content={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo eos itaque sunt consectetur vitae enim ipsum aspernatur maiores cupiditate, voluptate inventore, aperiam omnis obcaecati ex quod commodi animi tenetur cumque?'} />

    <Separator />

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
          onKeyDown={handleKeyDown}
          onChange={(event) => {
            setNewAnswer(event.target.value)
          }}
        />
      </label>
        <button type="submit">
          <PaperPlaneRight size={24} />
          <span>Answer</span>
        </button>
    </form>


    {
      answers.map((answer, index) => (
        <Tweet key={index} content={answer} />
      ))
    }
  </main>
  )
}
