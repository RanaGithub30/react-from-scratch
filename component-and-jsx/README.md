## React Component Guide

1. Creating a Simple Component

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

2. Using Dynamic Values (Props)

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
