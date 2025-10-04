import React from "react";

function UserData({ data, title }) {
  return (
    <div
      style={{
        flex: "1 1 250px", // Flexible width
        margin: "10px",
        padding: "20px",
        borderRadius: "12px",
        background: "linear-gradient(135deg, #fff7e6, #ffe7c6)",
        boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
        textAlign: "center",
        minWidth: "250px",
      }}
    >
      <h3 style={{ marginBottom: "15px", color: "#333" }}>{title}</h3>
      <ul style={{ listStyleType: "none", padding: 0, lineHeight: "1.8", fontSize: "16px" }}>
        <li>
          <strong>Name:</strong> {data.name}
        </li>
        <li>
          <strong>Age:</strong> {data.age}
        </li>
        <li>
          <strong>City:</strong> {data.city}
        </li>
        <li>
          <strong>Country:</strong> {data.country}
        </li>
        <li>
          <strong>Profession:</strong> {data.profession}
        </li>
      </ul>
    </div>
  );
}

export default UserData;