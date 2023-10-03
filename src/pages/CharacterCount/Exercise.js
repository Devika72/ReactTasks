import { useState } from "react";
import "./App.css";

function Points({ maxCount, breakpoint1, breakpoint2 }) {
  const [data, setData] = useState("");

  function charCounter() {
    let countcolor = "";
    let diff = maxCount - data.length;
    if (diff > breakpoint1) {
      countcolor = "black";
    } else if (diff > breakpoint2) {
      countcolor = "green";
    } else {
      countcolor = "red";
    }
    return (
      <div>
        <span style={{ color: countcolor }}>{diff}</span>/50
      </div>
    );
  }
  return (
    <div>
      <textarea
        style={{ maxWidth: "500px", width: "100%", height: "100px" }}
        value={data}
        onChange={(e) => {
          setData(e.target.value);
        }}
      />
      <div>{charCounter()}</div>
    </div>
  );
}

export function Exercise() {
  return (
    <div>
      <h2>Character Counter</h2>
      <Points maxCount={50} breakpoint1={20} breakpoint2={0} />
    </div>
  );
}