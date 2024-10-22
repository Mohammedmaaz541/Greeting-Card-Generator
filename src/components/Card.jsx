import React from "react";
import "./Card.css"; // Optional: add your styles here

function Card({ name, supermessage, theme }) {
  return (
    <div className={`card ${theme}`}>
      <h2>Hello, {name}!</h2>
      <p>{supermessage}</p> {/* Ensure this displays the message */}
    </div>
  );
}

export default Card;
