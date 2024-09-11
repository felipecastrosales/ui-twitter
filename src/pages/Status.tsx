import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Tweet } from "../components/Tweet";

import './Status.css';

const answers = [
  'Yeah, I agree!',
  'I think so too!',
  'I disagree!',
];


export function Status() {
  return (
    <main className="status">
    <Header title={'Tweet'} />

    <Tweet content={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo eos itaque sunt consectetur vitae enim ipsum aspernatur maiores cupiditate, voluptate inventore, aperiam omnis obcaecati ex quod commodi animi tenetur cumque?'} />

    <Separator />

    <form className="answer-tweet-form">
      <label htmlFor="tweet">
        <img src="https://github.com/felipecastrosales.png" alt="Avatar" />
        <textarea id="tweet" placeholder="Tweet your answer" />
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
