import { ArrowsClockwise, ChatCircle, Heart } from 'phosphor-react';
import './Tweet.css';
import { Link } from 'react-router-dom';

interface TweetProps {
  content: string;
}

export function Tweet(
  props: TweetProps,
) {
  return (
    <Link to='/status' className="tweet">
      <img src="https://github.com/felipecastrosales.png" alt="Felipe Castro Sales" />

      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong>Felipe Castro Sales</strong>
          <span>@felipecastrosales</span>
          <time>1h</time>
        </div>

          {/* <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br />
            <a href="#">#javascript</a> <a href="#">#react</a>
          </p> */}
          <p>{props.content}</p>

        <div className="tweet-content-footer">
          <button type="button">
            <ChatCircle />
            3
          </button>

          <button type="button">
            <ArrowsClockwise />
            5
          </button>

          <button type="button">
            <Heart />
            10
          </button>
        </div>
      </div>
    </Link>
  );
}
