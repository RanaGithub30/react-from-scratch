import React from "react";

function Blog() {
  const blogs = [
    {
      title: "Getting Started with React",
      excerpt:
        "Learn the basics of React, components, JSX, and how to build your first app.",
      date: "March 12, 2024",
    },
    {
      title: "Understanding React Router",
      excerpt:
        "A beginner-friendly guide to routing, navigation, and dynamic pages in React.",
      date: "April 5, 2024",
    },
    {
      title: "Reusable Components in React",
      excerpt:
        "How to write clean, reusable, and maintainable React components.",
      date: "May 20, 2024",
    },
  ];

  return (
    <section style={styles.container}>
      <h2 style={styles.heading}>Blog</h2>
      <p style={styles.subtitle}>
        Articles, tutorials, and thoughts about React and web development.
      </p>

      <div style={styles.cardContainer}>
        {blogs.map((blog, index) => (
          <div key={index} style={styles.card}>
            <h3 style={styles.cardTitle}>{blog.title}</h3>

            <p style={styles.date}>{blog.date}</p>

            <p style={styles.excerpt}>{blog.excerpt}</p>

            <button style={styles.readMore}>Read More</button>
          </div>
        ))}
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
    marginBottom: "8px",
    color: "#282c34",
  },
  date: {
    fontSize: "13px",
    color: "#888",
    marginBottom: "12px",
  },
  excerpt: {
    fontSize: "15px",
    color: "#555",
    marginBottom: "20px",
    lineHeight: "1.5",
  },
  readMore: {
    padding: "8px 14px",
    border: "none",
    borderRadius: "6px",
    backgroundColor: "#61dafb",
    color: "#282c34",
    fontWeight: "600",
    cursor: "pointer",
  },
};

export default Blog;