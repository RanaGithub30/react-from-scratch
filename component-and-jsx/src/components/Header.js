import React from "react";

function Header() {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>My First React App</h1>
      <nav>
        <ul style={styles.navList}>
          <li><a href="#home" style={styles.link}>Home</a></li>
          <li><a href="#about" style={styles.link}>About</a></li>
          <li><a href="#contact" style={styles.link}>Contact</a></li>
        </ul>
      </nav>
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
  navList: {
    listStyle: "none",
    padding: 0,
    display: "flex",
    justifyContent: "center",
    gap: "20px"
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold"
  }
};

export default Header;