import Header from "./components/Header";
import reactLogo from "./assets/logo.png";
import { MyData, NewUserData, TechStacksData } from "./data";
import UserData from "./components/UserData";
import TechStacks from "./components/TechStacks";

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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap", // Wrap on small screens
          gap: "20px",
          margin: "20px 0",
        }}
      >
      <UserData data={MyData} title="About Me" />
      <UserData data={NewUserData} title="About New User" />
    </div>

      {/* Displaying Tech Stacks */}
      <TechStacks data={TechStacksData} title="My Tech Stacks" />

      <footer style={{ textAlign: "center", padding: "10px", background: "#f0f0f0" }}>
        <p>&copy; 2024 My React App</p>
      </footer>
    </div>
  );
}

export default App;