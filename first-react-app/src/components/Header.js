
function Header(){
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>My First React App</h1>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: "#282c34",
    padding: "20px",
    textAlign: "center"
  },
  title: {
    color: "#61dafb",
    margin: 0
  },
};

export default Header;