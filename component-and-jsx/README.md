# React Component Guide

# 1. What is a Component?

Components are the building blocks of a React app. They are reusable pieces of UI that can display data or interact with the user.
Example components in this project: Header, UserData, App.

# 2. Creating a Simple Component

# Create a new file called Hello.js:

    import React from "react";

    function Hello() {
    return <h1>Hello, World!</h1>;
    }

    export default Hello;

# Use it inside your app:

    import React from "react";
    import Hello from "./Hello";

    function App() {
    return (
        <div>
        <Hello />
        </div>
    );
    }

    export default App;

# 3. Using Dynamic Values (Props)

Props are inputs to components. They let you pass data from a parent component to a child component.

# Example: -
# Update the component to accept props:

    import React from "react";

    function Hello({ name }) {
    return <h1>Hello, {name}!</h1>;
    }

    export default Hello;

# Pass a value when using it:

    import React from "react";
    import Hello from "./Hello";

    function App() {
    return (
        <div>
        <Hello name="Alice" />
        <Hello name="Bob" />
        </div>
    );
    }

    export default App;

# 4. JSX

JSX looks like HTML but is actually JavaScript. You use it to describe your UI:

import React from "react";

function Greeting() {
  const name = "Alice";
  const isLoggedIn = true;

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Hello, {name}!</h1>
      {isLoggedIn ? <p>Welcome back! 🎉</p> : <p>Please log in.</p>}
      <button onClick={() => alert("Clicked!")}>Click Me</button>
    </div>
  );
}

export default Greeting;

# Explanation

    1. Looks like HTML but is JavaScript:
        <div>, <h1>, <p> look like HTML tags, but it’s actually JSX.

    2. Embedding JavaScript:

        a) {name} inserts the JavaScript variable name into the HTML.
        b) {isLoggedIn ? <p>Welcome back!</p> : <p>Please log in.</p>} shows conditional rendering using JavaScript.

    3. Adding events:

        onClick={() => alert("Clicked!")} shows how to handle events in JSX.

## Install React Router

npm install react-router-dom
