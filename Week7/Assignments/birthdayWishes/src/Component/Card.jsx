import React from "react";

const Card = ({ name }) => {
  return (
    <div style={{}}>
      <div
        style={{
          height: "400px",
          width: "300px",
          border: "2px solid black",
          backgroundColor: "#00539CFF",
          color: "#EEA47FFF",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            marginTop: "140px",
          }}
        >
          Happy Birthday {name} 🎉
        </h1>
      </div>
    </div>
  );
};

export default Card;
