import React from "react";

export default function NotFound() {
  return (
    <header
      style={{
        textAlign: "center",
        fontSize: "40px",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <h1>
        <strong>Page Not Found 😢</strong>
      </h1>
      <p>존재하지 않는 페이지 입니다.</p>
    </header>
  );
}
