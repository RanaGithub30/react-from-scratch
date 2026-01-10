import React from "react";
import { NavLink, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  const getLinkStyle = (path) => ({
    ...styles.link,
    ...(location.pathname === path
      ? styles.activeLink
      : styles.inactiveLink),
  });

  return (
    <header style={styles.header}>
      <h1 style={styles.title}>My First React App</h1>

      <nav>
        <ul style={styles.navList}>
          <li>
            <NavLink to="/" end style={getLinkStyle("/")}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" style={getLinkStyle("/about")}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" style={getLinkStyle("/projects")}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" style={getLinkStyle("/blog")}>
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" style={getLinkStyle("/contact")}>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" style={getLinkStyle("/login")}>
              Login
            </NavLink>
          </li>
          <li>
            <NavLink to="/register" style={getLinkStyle("/register")}>
              Register
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
    textDecoration: "none",
    fontSize: "16px",
    padding: "6px 12px",
    borderRadius: "6px",
    transition: "all 0.3s ease",
  },
  inactiveLink: {
    color: "#aaa",
    fontWeight: "400",
    backgroundColor: "transparent",
  },
  activeLink: {
    color: "#fff",
    fontWeight: "700",
    backgroundColor: "#61dafb",
  },
};

export default Header;