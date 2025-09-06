import React from "react";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <main style={{ padding: "20px", textAlign: "center" }}>
        <h2>Welcome to my app 🚀</h2>
        <p>This is my first React project!</p>
      </main>
    </div>
  );
}

export default App;