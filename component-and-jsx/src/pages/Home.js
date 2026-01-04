import reactLogo from "../assets/logo.png";
import { MyData, NewUserData, TechStacksData } from "../data";
import UserData from "../components/UserData";
import TechStacks from "../components/TechStacks";

function Home() {
  return (
    <>
      <main style={{ padding: "20px", textAlign: "center" }}>
        <img src={reactLogo} alt="React Logo" style={{ width: "100px" }} />
        <h2>Welcome to my app 🚀</h2>
        <p>This is my first React project!</p>
      </main>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "20px",
          margin: "20px 0",
        }}
      >
        <UserData data={MyData} title="About Me" />
        <UserData data={NewUserData} title="About New User" />
      </div>

      <TechStacks data={TechStacksData} title="My Tech Stacks" />
    </>
  );
}

export default Home;