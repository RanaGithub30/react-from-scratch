import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>My First React App</h1>

      <nav>
        <ul style={styles.navList}>
          <li>
            <NavLink to="/" style={styles.link}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" style={styles.link}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" style={styles.link}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" style={styles.link}>
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" style={styles.link}>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" style={styles.link}>
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: "#282c34",
    padding: "20px 0",
    textAlign: "center",
  },
  title: {
    color: "#61dafb",
    marginBottom: "15px",
  },
  navList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    justifyContent: "center",
    gap: "25px",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontWeight: "600",
    fontSize: "16px",
    padding: "6px 12px",
    borderRadius: "6px",
    transition: "background-color 0.3s",
  },
};

export default Header;