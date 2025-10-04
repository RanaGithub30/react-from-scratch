import React from "react";
import Header from "./components/Header";
import reactLogo from "./assets/logo.png";

/** Add your data here */
export const MyData = {
  name: "Rana Saha",
  age: 33,
  city: "Kolkata",
  country: "India",
  profession: "Web Developer",
}

function App() {
  return (
    <div>
      <Header />
      <main style={{ padding: "20px", textAlign: "center" }}>
      
      {/* Displaying React logo */}
      <img src={reactLogo} alt="React Logo" style={{ width: "100px" }} />
        <h2>Welcome to my app 🚀</h2>
        <p>This is my first React project!</p>
      </main>

      {/* Displaying data from MyData object */}
      <div style={{ padding: "20px", background: "#f9f9f9", margin: "20px", textAlign: "center" }}>
        <h3>About Me</h3>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li><strong>Name:</strong> {MyData.name}</li>
          <li><strong>Age:</strong> {MyData.age}</li>
          <li><strong>City:</strong> {MyData.city}</li>
          <li><strong>Country:</strong> {MyData.country}</li>
          <li><strong>Profession:</strong> {MyData.profession}</li>
        </ul>
      </div>  
      <footer style={{ textAlign: "center", padding: "10px", background: "#f0f0f0" }}>
        <p>&copy; 2024 My React App</p>
      </footer>
    </div>
  );
}

export default App;