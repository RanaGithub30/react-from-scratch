import React from "react";

function TechStacks({ data }) {
  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "30px auto",
        padding: "25px",
        borderRadius: "12px",
        background: "linear-gradient(135deg, #f0f4ff, #d9e4ff)",
        boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
        textAlign: "center",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <h3 style={{ marginBottom: "20px", color: "#1a1a1a" }}>💻 My Tech Stacks</h3>
      <ul style={{ listStyleType: "none", padding: 0, lineHeight: "1.8", fontSize: "16px" }}>
        <li>
          <strong>Front End:</strong>{" "}
          <span style={{ color: "#2a7ae2" }}>{data.frontEnd.join(", ")}</span>
        </li>
        <li>
          <strong>Back End:</strong>{" "}
          <span style={{ color: "#e27a2a" }}>{data.backEnd.join(", ")}</span>
        </li>
        <li>
          <strong>Database:</strong>{" "}
          <span style={{ color: "#27a22a" }}>{data.database.join(", ")}</span>
        </li>
        <li>
          <strong>Version Control:</strong>{" "}
          <span style={{ color: "#a227e2" }}>{data.versionControl.join(", ")}</span>
        </li>
      </ul>
    </div>
  );
}

export default TechStacks;