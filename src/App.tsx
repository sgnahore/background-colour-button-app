import React, { useState } from "react";
import "./App.css";

const COLOURS = ["pink", "green", "blue", "yellow", "purple"];

function App() {
  const [backgroundColor, setBackgroundColor] = useState(COLOURS[0]);

  const onButtonClick = (colour: string) => () => {
    setBackgroundColor(colour);
  };

  return (
    <div
      className="App"
      style={{
        backgroundColor,
      }}
    >
      {COLOURS.map((colour) => (
        <button
          type="button"
          key={colour}
          onClick={onButtonClick(colour)}
          className={backgroundColor === colour ? "selected" : ""}
        >
          {colour}
        </button>
      ))}
    </div>
  );
}

export default App;
