import React, { useState } from "react";
import axios from "axios";

// Suggested initial states
const initialMessage = "";
const initialEmail = "";
const initialSteps = 0;
const initialIndex = 4; // the index the "B" is at

export default function AppFunctional(props) {
  const [message, setMessage] = useState(initialMessage);
  const [email, setEmail] = useState(initialEmail);
  const [steps, setSteps] = useState(initialSteps);
  const [index, setIndex] = useState(initialIndex);
  const [coordinates, setCoordinates] = useState({ x: 2, y: 2 });

  function getXY(direction) {
    let x = coordinates.x;
    let y = coordinates.y;

    switch (direction) {
      case "left":
        x = x - 1;
        break;
      case "up":
        y = y - 1;
        break;
      case "right":
        x = x + 1;
        break;
      case "down":
        y = y + 1;
        break;
      default:
        break;
    }
    return { x, y };
  }

  function getXYMessage() {
    const { x, y } = getXY();
    return `Coordinates (${x}, ${y})`;
  }

  function reset() {
    // Use this helper to reset all states to their initial values.
    setMessage(initialMessage);
    setEmail(initialEmail);
    setSteps(initialSteps);
    setIndex(initialIndex);
    setCoordinates({ x: 2, y: 2 });
  }

  function getNextIndex(direction) {
    // This helper takes a direction ("left", "up", "right", "down") and calculates what the next index
    // of the "B" would be. If the move is impossible because we are at the edge of the grid,
    // this helper should return the current index unchanged.
    const x = index % 3;
    const y = Math.floor(index / 3);
    switch (direction) {
      case "left":
        return x > 0 ? index - 1 : index;
      case "up":
        return y > 0 ? index - 3 : index;
      case "right":
        return x < 2 ? index + 1 : index;
      case "down":
        return y < 2 ? index + 3 : index;
      default:
        return index;
    }
  }

  function move(evt) {
    // This event handler can use the helper above to obtain a new index for the "B",
    // and change any states accordingly.
  }

  function onChange(evt) {
    // You will need this to update the value of the input.
    setEmail;
  }

  function formSubmit(evt) {
    // Use a POST request to send a payload to the server.
    evt.preventDefault();
  }

  return (
    <div id="wrapper" className={props.className}>
      <div className="info">
        <h3 id="coordinates">Coordinates (2, 2)</h3>
        <h3 id="steps">You moved 0 times</h3>
      </div>
      <div id="grid">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((idx) => (
          <div key={idx} className={`square${idx === 4 ? " active" : ""}`}>
            {idx === 4 ? "B" : null}
          </div>
        ))}
      </div>
      <div className="info">
        <h3 id="message"></h3>
      </div>
      <div id="keypad">
        <button id="left">LEFT</button>
        <button id="up">UP</button>
        <button id="right">RIGHT</button>
        <button id="down">DOWN</button>
        <button id="reset" onClick={reset}>
          reset
        </button>
      </div>
      <form onSubmit={formSubmit}>
        <input id="email" type="email" placeholder="type email"></input>
        {/* // value={setEmail}  */}
        <input id="submit" type="submit"></input>
      </form>
    </div>
  );
}
