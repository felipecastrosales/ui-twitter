# Twitter UI Clone

This project is a Twitter UI clone built with React, TypeScript, and Vite. It aims to replicate some of the core features and design elements of Twitter's user interface.

## Features

- Home timeline
- Tweet composition
- Tweet display
- Responsive design

## Technologies Used

- React 18
- TypeScript
- Vite
- React Router
- Phosphor Icons

## Project Structure

The project follows a standard React application structure:

- `src/`: Contains the main source code
  - `components/`: Reusable React components
  - `pages/`: Main page components
  - `layouts/`: Layout components
  - `assets/`: Static assets like images
  - `global.css`: Global styles

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Run the development server:
   ```
   npm run dev
   ```

## Available Scripts


```6:11:package.json
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
```

- `dev`: Runs the app in development mode
- `build`: Builds the app for production
- `lint`: Runs ESLint to check for code quality issues
- `preview`: Previews the production build locally

## Key Components

### Timeline

The Timeline component displays a list of tweets and allows users to compose new tweets:

```8:65:src/pages/Timeline.tsx
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

    setTweets([newTweet, ...tweets])
    setNewTweet('')

    console.log('New tweet:', tweet)
    console.log('Tweets:', tweets)
  }

  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter' && (event.metaKey || event.ctrlKey)) {
      setTweets([newTweet, ...tweets])
      setNewTweet('')
    }
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
          onKeyDown={handleKeyDown}
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
```


### Tweet

The Tweet component represents an individual tweet:

```5:49:src/components/Tweet.tsx
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
```


### Sidebar

The Sidebar component provides navigation and the tweet button:


```8:53:src/components/Sidebar.tsx
export function Sidebar() {
  return (
    <aside className="sidebar">
    <img className="logo" src={twitterLogo} alt="Twitter" />
    <nav className="main-navigation">
      <NavLink to="/">
        <House weight="fill" size={24} />
        <span>Home</span>
      </NavLink>
      <a href="">
        <Hash/>
        <span>Explore</span>
      </a>
      <a href="">
        <Bell />
        <span>Notifications</span>
      </a>
      <a href="">
        <Envelope />
        <span>Messages</span>
      </a>
      <a href="">
        <BookmarkSimple />
        <span>Bookmarks</span>
      </a>
      <a href="">
        <FileText />
        <span>Lists</span>
      </a>
      <a href="">
        <User />
        <span>Profile</span>
      </a>
      <a href="">
        <DotsThreeCircle />
        <span>More</span>
      </a>
    </nav>

    <button className="new-tweet" type="button">
      <Pencil weight="fill" size={24} />
      <span>Tweet</span>
    </button>
  </aside>
  );
}
```


## Styling

The project uses CSS modules for component-specific styles and a global CSS file for common styles:


```1:27:src/global.css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --twitter-blue: #1da1f2;
}

body {
  color: #0f1419;
  -webkit-font-smoothing: antialiased;
}

body, input, textarea, button {
  font: 400 1rem 'Roboto', sans-serif;
}

button {
  cursor: pointer;
}

a {
  color: inherit;
}

```


## Routing

React Router is used for navigation:


```1:21:src/routes.tsx
import { createBrowserRouter } from "react-router-dom";
import { Timeline } from "./pages/Timeline";
import { Status } from "./pages/Status";
import { Default } from "./layouts/Default";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Default />,
    children: [
      {
        path: '/',
        element: <Timeline />,
      },
      {
        path: '/status',
        element: <Status />,
      },
    ]
  }
]);
```


## Development

This project uses ESLint for code quality and TypeScript for type checking. The configuration can be found in the `eslint.config.js` and `tsconfig.json` files.

## License

This project is open-source and available under the MIT License.

---

This README provides an overview of the Twitter UI clone project, highlighting its main features, technologies used, and project structure. It also includes instructions for getting started and running the project locally.
