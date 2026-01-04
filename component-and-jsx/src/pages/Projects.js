import React from "react";

function Projects() {
  const projects = [
    {
      title: "React Portfolio",
      description:
        "A personal portfolio website built using React and React Router.",
      tech: "React, JavaScript, CSS",
    },
    {
      title: "Todo App",
      description:
        "A simple todo application with add, delete, and complete features.",
      tech: "React, Hooks",
    },
    {
      title: "Weather App",
      description:
        "Fetches real-time weather data using a public API.",
      tech: "React, API, Axios",
    },
  ];

  return (
    <section style={styles.container}>
      <h2 style={styles.heading}>Projects</h2>
      <p style={styles.subtitle}>
        Here are some of the projects I’ve worked on recently.
      </p>

      <div style={styles.cardContainer}>
        {projects.map((project, index) => (
          <div key={index} style={styles.card}>
            <h3 style={styles.cardTitle}>{project.title}</h3>
            <p style={styles.cardDescription}>{project.description}</p>

            <p style={styles.tech}>
              <strong>Tech:</strong> {project.tech}
            </p>

            <div style={styles.actions}>
              <button style={styles.button}>Live Demo</button>
              <button style={styles.buttonOutline}>GitHub</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  container: {
    padding: "40px 20px",
    maxWidth: "1100px",
    margin: "0 auto",
    textAlign: "center",
  },
  heading: {
    fontSize: "32px",
    marginBottom: "10px",
    color: "#282c34",
  },
  subtitle: {
    fontSize: "18px",
    color: "#666",
    marginBottom: "40px",
  },
  cardContainer: {
    display: "flex",
    gap: "25px",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  card: {
    backgroundColor: "#ffffff",
    padding: "25px",
    borderRadius: "12px",
    width: "300px",
    boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
    textAlign: "left",
  },
  cardTitle: {
    marginBottom: "10px",
    color: "#282c34",
  },
  cardDescription: {
    fontSize: "15px",
    color: "#555",
    marginBottom: "15px",
    lineHeight: "1.5",
  },
  tech: {
    fontSize: "14px",
    marginBottom: "20px",
    color: "#333",
  },
  actions: {
    display: "flex",
    gap: "10px",
  },
  button: {
    flex: 1,
    padding: "8px",
    border: "none",
    borderRadius: "6px",
    backgroundColor: "#61dafb",
    color: "#282c34",
    fontWeight: "600",
    cursor: "pointer",
  },
  buttonOutline: {
    flex: 1,
    padding: "8px",
    borderRadius: "6px",
    border: "2px solid #61dafb",
    backgroundColor: "transparent",
    color: "#282c34",
    fontWeight: "600",
    cursor: "pointer",
  },
};

export default Projects;