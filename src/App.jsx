import React, { useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />

      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Hello Vite + React ⚡</h1>

        <p>Counter: {count}</p>

        <button onClick={() => setCount(count + 1)}>
          Increase
        </button>

        <button
          onClick={() => setCount(count - 1)}
          style={{ marginLeft: "10px" }}
        >
          Decrease
        </button>
      </div>
    </div>
  );
}

export default App;