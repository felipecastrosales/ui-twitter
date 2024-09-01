interface TweetProps {
  user: string;
  children: string;
  likes?: number;
}

const tweetStyles = {
  backgroundColor: 'black',
  borderRadius: 8
};

// export function Tweet(props) {
export function Tweet(props: TweetProps) {
  // console.log(props)
  return (
    // <div className="tweet">
    <div className="tweet" style={{ backgroundColor: 'black', borderRadius: 8 }}>
    {/* <div className="tweet" style={tweetStyles}> */}
      {/* {props.user} */}
      <strong>{props.user}</strong>
      {/* <p>{props.content}</p> */}
      <p>{props.children}</p>
      <button>likes {props.likes ?? 0}</button>
      {/* <h1> */}
          {/* Tweet */}
          {/* <button onClick={() => console.log('clicked')}>Click me</button> */}
      {/* </h1> */}
    </div>
  );
}
