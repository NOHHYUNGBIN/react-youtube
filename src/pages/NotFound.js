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
        <strong>Page Not Found ๐ข</strong>
      </h1>
      <p>์กด์ฌํ์ง ์๋ ํ์ด์ง ์๋๋ค.</p>
    </header>
  );
}
