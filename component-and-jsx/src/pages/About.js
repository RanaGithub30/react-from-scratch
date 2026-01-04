import React from "react";

function About() {
  return (
    <section style={styles.container}>
      <h2 style={styles.heading}>About Me</h2>

      <p style={styles.intro}>
        Hi 👋 I’m a passionate front-end developer who loves building clean,
        responsive, and user-friendly web applications using React.
      </p>

      <div style={styles.cardContainer}>
        <div style={styles.card}>
          <h3>💡 What I Do</h3>
          <p>
            I build modern web interfaces using React, focusing on performance,
            accessibility, and clean UI design.
          </p>
        </div>

        <div style={styles.card}>
          <h3>🚀 Skills</h3>
          <p>
            React, JavaScript (ES6+), HTML, CSS, Git, Responsive Design
          </p>
        </div>

        <div style={styles.card}>
          <h3>🎯 Goals</h3>
          <p>
            To grow as a full-stack developer and contribute to meaningful
            projects that solve real-world problems.
          </p>
        </div>
      </div>
    </section>
  );
}

const styles = {
  container: {
    padding: "40px 20px",
    maxWidth: "1000px",
    margin: "0 auto",
    textAlign: "center",
  },
  heading: {
    fontSize: "32px",
    marginBottom: "20px",
    color: "#282c34",
  },
  intro: {
    fontSize: "18px",
    color: "#555",
    marginBottom: "40px",
    lineHeight: "1.6",
  },
  cardContainer: {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  card: {
    backgroundColor: "#f9f9f9",
    padding: "20px",
    borderRadius: "10px",
    width: "280px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
};

export default About;