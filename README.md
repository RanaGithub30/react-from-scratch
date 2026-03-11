## React Learning Journey 🚀

    Welcome to my React Learning Journey repository!
    This repo contains my notes, experiments, and mini-projects as I learn React from Udemy courses and other resources.

📖 What is React?

    React is a JavaScript library for building user interfaces (UIs), created and maintained by Facebook (Meta).
    It helps developers create interactive, dynamic, and reusable UI components for web applications.

    Instead of reloading the entire page, React updates only the parts that change — making apps faster and more efficient.

💡 Why use React?

    ⚡ Fast Rendering – Uses a Virtual DOM for efficient updates.
    🧩 Reusable Components – Build UI blocks once and reuse them.
    🔄 One-Way Data Flow – Easier to debug and maintain.
    🌎 Large Ecosystem – Huge community, third-party libraries, and job demand.
    📱 Cross-Platform – Works for web (React.js) and mobile (React Native).


🏗️ How to Set Up a React Project

React App can be set up by Create React App

    # 1. Create a new React app
    npx create-react-app my-react-app

    # 2. Go into your project folder
    cd my-react-app

    # 3. Start the development server
    npm start


📂 What’s in this Repository?

This repo is structured to track my learning progress. It includes:

    1. Basics of React
    2. Setting up a React project from scratch
    3. Components & JSX

🧠 React State

    State is a built-in React object that allows components to create and manage data that can change over time.
    When state changes, the component re-renders automatically
    State is local to a component
    Helps make UIs dynamic and interactive
    
    Example using useState:

    import { useState } from "react";

    function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
    }

