import Header from "./components/Header";
import AppRoutes from "./components/AppRoutes";

function App() {
  return (
    <>
      <Header />
      <AppRoutes />
      <footer style={{ textAlign: "center", padding: "10px", background: "#f0f0f0" }}>
        <p>&copy; 2024 My React App</p>
      </footer>
    </>
  );
}

export default App;