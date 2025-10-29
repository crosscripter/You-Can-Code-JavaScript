import Example from './components/Example';
import Welcome from './components/Welcome';
import Greeting from './components/Greeting';
import UserStatus from './components/UserStatus';
import WelcomeMessage from './components/WelcomeMessage';
import WelcomeMessageClassComponent from './components/WelcomeMessageClassComponent';
import { UserListWithLoading } from './components/withLoading';
import ParentNestedComponent from './components/NestedComponents';
import Counter from './components/Counter';
import DataFetcher from './components/DataFetcher';
import UserProfile from './components/UserProfile';
import UserData from './components/UserData';
import CounterClassComponent from './components/CounterClassComponent';
import CounterFunctionalComponent from './components/CounterFunctionalComponent';
import CounterApp from './components/CounterApp';
import Clock from './components/Clock';
import ColorChanger from './components/ColorChanger';

function App() {
  return (
    <main>
      <header>
        <h1>⚛️ React</h1>
      </header>

      <article>
        <header>
          <h2>Components</h2>
        </header>

        <section>
          <header>
            <h3>Lesson 1 - What is React?</h3>
          </header>

          <Example
            title="JSX"
            source={`function Welcome() {
  return <h1>Welcome to React!</h1>;
}
  
<Welcome />`}
          >
            {<Welcome />}
          </Example>

          <Example
            title="Simple Component"
            source={`// React Component
function Greeting(props) {

  // JSX is an extension that allows HTML-like markup in JS
  return <h1>Hello, {props.name}!</h1>;
}

<Greeting name="World" />`}
          >
            <Greeting name="World" />
          </Example>
        </section>

        <section>
          <header>
            <h3>Lesson 2 - JSX</h3>
          </header>

          <Example title="JSX Syntax" source="const element = <h1>Hello, World!</h1>;">
            <h1>Hello, World!</h1>
          </Example>

          <Example
            title="Greeting"
            source={`function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}
  
<Greeting name="World" />`}
          >
            <Greeting name="World" />
          </Example>

          <Example
            title="Functional Component"
            source={`function Welcome(props) {
  return <h1>Welcome, {props.name}!</h1>;
}
  
<Welcome name="Bob" />`}
          >
            <Welcome name="Bob" />
          </Example>

          <Example
            title="Mixing UI and Logic"
            source={`function UserStatus(props) {
  return (
    <div>
      <h4>{props.isLoggedIn ? 'Welcome back!' : 'Please sign in'}</h4>

      <button onClick={props.handleClick}>
  {props.isLoggedIn ? 'Logout' : 'Login'}
</button>
    </div>
  );
}

<UserStatus isLoggedIn />

<UserStatus isLoggedIn={false} />
`}
          >
            <UserStatus isLoggedIn />
            <hr />
            <UserStatus isLoggedIn={false} />
          </Example>
        </section>

        <section>
          <header>
            <h3>Lesson 3 - Components</h3>
          </header>

          <Example
            title="Function Components"
            source={`function WelcomeMessage({ name }) {
  return <h1>Welcome, {name}!</h1>;
}

<WelcomeMessage name="Earthlings"/>`}
          >
            <WelcomeMessage name="Earthlings" />
          </Example>

          <Example
            title="Class Components"
            source={`import React from "react";

class WelcomeMessageClassComponent extends React.Component {
  render() {
    return <h1>Welcome, {this.props.name}!</h1>;
  }
}

<WelcomeMessageClassComponent name="Earthlings" />`}
          >
            <WelcomeMessageClassComponent name="Earthlings" />
          </Example>

          <Example
            title="Higher-Order Components"
            source={`function UserList({ users }) {
  return (
    <ol>
      {users.map(user => <li>{user}</li>)}
    </ol>
  );
}

function withLoading(Component) {

  return function WithLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return <p>Loading...</p>;
  };

}

export default withLoading;

export const UserListWithLoading = withLoading(UserList);


<UserListWithLoading isLoading />

<UserListWithLoading isLoading={false} users={['user1','user2']} />
`}
          >
            <UserListWithLoading isLoading />
            <hr />
            <UserListWithLoading isLoading={false} users={['user1', 'user2']} />
          </Example>

          <Example
            title="Nested Components (State and Props)"
            source={`
import React, { useState } from 'react';

const Child1 = ({ message }) => <p>Message: {message}</p>;

const Child2 = ({ setMessage }) => (
  <button onClick={() => setMessage('Updated from Child2!')}>
    Update Message
  </button>
);

function ParentNestedComponent() {
  const [message, setMessage] = useState('Hello from Parent!');

  return (
    <div>
      <Child1 message={message} />
      <Child2 setMessage={setMessage} />
    </div>
  );
}            

<ParentNestedComponent />`}
          >
            <ParentNestedComponent />
          </Example>
        </section>

        <section>
          <header>
            <h3>Hooks</h3>
          </header>

          <Example
            title="useState"
            source={`function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <div className="buttons" style={{display: 'flex'}}>
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  );
}

<Counter />`}
          >
            <Counter />
          </Example>

          <Example
            title="useEffect"
            source={`import React, { useState, useEffect } from 'react';

function DataFetcher({ url }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(json => setData(json));
  }, [url]); // Only re-run the effect if the URL changes

  return (
    <pre style={{fontSize: 'small'}}>
      {data ? JSON.stringify(data, null, 2) : 'Loading...'}
    </pre>
  );
}

<DataFetcher url="https://jsonplaceholder.typicode.com/users/1" />`}
          >
            <DataFetcher url="https://jsonplaceholder.typicode.com/users/1" />
          </Example>

          <Example
            title="useContext"
            source={`// UserContext.jsx
import { createContext } from 'react';
const UserContext = createContext();
export default UserContext;
 
// UserProfile.jsx
import React from 'react';
import { useState } from 'react';
import UserContext from './UserContext';
import UserInfo from './UserInfo';

export default function UserProfile() {
  const [user, setUser] = useState({
    id: 123,
    age: 52,
    name: 'Bob',
    location: 'NY',
    username: 'iambob2',
    img: 'https://randomuser.me/api/portraits/men/21.jpg'
  });

  return (
    <UserContext.Provider value={user}>
      <img src={user.img} />
      <h5>@{user.username}</h5>
      <hr />
      <UserInfo user={user} />
    </UserContext.Provider>
  );
}
         
// UserInfo.jsx
import { useContext } from "react";
import UserContext from "./UserContext";

export default function UserInfo() {
  const user = useContext(UserContext);

  return (
    <div className="userInfo">
      {Object.entries(user).map(([prop,value]) => {
        if (prop == 'img') return
        return <p key={prop}><b>{prop}</b>: {value}</p>
      })}
    </div>
  );
}
  
<UserProfile />`}
          >
            <UserProfile />
          </Example>

          <Example
            title="Custom Hooks"
            source={`// hooks/index.js

// Custom hook
export function useUserData(userId) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(\`https://jsonplaceholder.typicode.com/users/\${userId}\`)
      .then(response => response.json())
      .then(json => setData(json));
  }, [url]);

  return data;
}

// UserData.jsx
import React, { useEffect } from 'react';
import { useUserData } from '../hooks';
import hljs from 'highlight.js';

export default function UserData({ userId }) {
  const user = useUserData(userId);
  useEffect(() => hljs.highlightAll(), [user]);
  if (!user) return 'loading...';

  return (
    <div className='userData'>
      <h5>User Data</h5>
      <b>{user.name}</b>
      <pre style={{fontSize: 'x-small'}}>
        <code className='language-json'>
          {JSON.stringify(user, null, 2)}
        </code>
      </pre>
    </div>
  );
}

<UserData userId={7} />`}
          >
            <UserData userId={7} />
          </Example>
        </section>

        <section>
          <header>
            <h3>lesson 5 - State</h3>
          </header>

          <Example
            title="Class Component State"
            source={`export default class CounterClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

<CounterClassComponent />`}
          >
            <CounterClassComponent />
          </Example>

          <Example
            title="Functional Component State"
            source={`import React, { useState } from 'react';

export default function CounterFunctionalComponent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
          
<CounterFunctionalComponent />`}
          >
            <CounterFunctionalComponent />
          </Example>

          <Example
            title="Using Components with Context"
            source={`import React, { useContext, useState, createContext } from 'react';

const CountContext = createContext();

function CounterProvider({ children }) {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
}

function DisplayCount() {
  const { count } = useContext(CountContext);
  return <p>Count: {count}</p>;
}

function IncrementButton() {
  const { setCount } = useContext(CountContext);

  return (
    <button onClick={() => setCount(c => c + 1)}>
      Increment
    </button>
  );
}

export default function CounterApp() {
  return (
    <CounterProvider>
      <DisplayCount />
      <IncrementButton />
    </CounterProvider>
  );
}

<CounterApp />`}
          >
            <CounterApp />
          </Example>
        </section>

        <section>
          <header>
            <h5>Lesson 6 - Effects</h5>
          </header>

          <Example
            title="Clock using useEffect()"
            source={`export default function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => setTime(new Date()), 1000);

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  const formattedTime = time.toLocaleTimeString().slice(0,-2);

  return (
    <div className={styles.clock}>
      <h1>{formattedTime}</h1>
    </div>
  );
}

<Clock />`}
          >
            <Clock />
          </Example>

          <Example
            title="Color Changer"
            source={`import React, { useState, useEffect } from "react";

function ColorChanger() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("white");

  // Effect to change background color when 'count' changes
  useEffect(() => {
    const colors = ["red", "blue", "green", "yellow", "purple"];
    setColor(colors[count % colors.length]); // Cycle through colors
  }, [count]); // Re-run effect only when 'count' changes

  return (
    <div style={{ backgroundColor: color, height: "100vh", textAlign: "center" }}>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Change Background</button>
    </div>
  );
}

<ColorChanger />`}>

            <ColorChanger />

          </Example>
        </section>
      </article>
    </main>
  );
}

export default App;
