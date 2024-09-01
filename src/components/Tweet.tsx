// export function Tweet(props) {
export function Tweet(props) {
  // console.log(props)
  return (
    <div>
      {/* {props.user} */}
      <strong>{props.user}</strong>
      {/* <p>{props.content}</p> */}
      <p>{props.children}</p>
      <button>like</button>
      {/* <h1> */}
          {/* Tweet */}
          {/* <button onClick={() => console.log('clicked')}>Click me</button> */}
      {/* </h1> */}
    </div>
  );
}
