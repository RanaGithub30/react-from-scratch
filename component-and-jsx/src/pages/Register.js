import React from "react";
import { Link, NavLink } from "react-router-dom";

function Register() {
  return (
    <section style={styles.container}>
      <h2 style={styles.heading}>Create Account</h2>
      <p style={styles.subtitle}>
        Join us by creating a new account.
      </p>

      <form style={styles.form}>
        <input
          type="text"
          placeholder="Full Name"
          style={styles.input}
        />

        <input
          type="email"
          placeholder="Email"
          style={styles.input}
        />

        <input
          type="password"
          placeholder="Password"
          style={styles.input}
        />

        <input
          type="password"
          placeholder="Confirm Password"
          style={styles.input}
        />

        <button type="submit" style={styles.button}>
          Register
        </button>
      </form>

      <p style={styles.footerText}>
        Already have an account?{" "}
        <span style={styles.link}><NavLink to="/login" style={styles.link}>Login</NavLink></span>
      </p>
    </section>
  );
}

const styles = {
  container: {
    padding: "40px 20px",
    maxWidth: "420px",
    margin: "0 auto",
    textAlign: "center",
  },
  heading: {
    fontSize: "32px",
    marginBottom: "10px",
    color: "#282c34",
  },
  subtitle: {
    fontSize: "16px",
    color: "#666",
    marginBottom: "30px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    padding: "12px",
    fontSize: "14px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "12px",
    border: "none",
    borderRadius: "6px",
    backgroundColor: "#61dafb",
    color: "#282c34",
    fontWeight: "600",
    cursor: "pointer",
  },
  footerText: {
    marginTop: "20px",
    fontSize: "14px",
    color: "#555",
  },
  link: {
    color: "#61dafb",
    fontWeight: "600",
    cursor: "pointer",
  },
};

export default Register;