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

  export const NewUserData = {
    name: "Jhon Doe",
    age: 35,
    city: "New York",
    country: "USA",
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

      {/* Make Components Reusable with Props */}
      <UserData data={MyData} title="About Me" />
      <UserData data={NewUserData} title="About New User" />
      
      <footer style={{ textAlign: "center", padding: "10px", background: "#f0f0f0" }}>
        <p>&copy; 2024 My React App</p>
      </footer>
    </div>
  );
}

function UserData({data, title}){
  return(
    <div style={{ padding: "20px", background: "#f9f9f9", margin: "20px", textAlign: "center" }}>
        <h3>{title}</h3>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li><strong>Name:</strong> {data.name}</li>
          <li><strong>Age:</strong> {data.age}</li>
          <li><strong>City:</strong> {data.city}</li>
          <li><strong>Country:</strong> {data.country}</li>
          <li><strong>Profession:</strong> {data.profession}</li>
        </ul>
    </div>  
  )
};

export default App;