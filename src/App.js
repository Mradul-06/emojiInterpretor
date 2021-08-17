import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "": "",
  "😀": ["HappyFace", "smiley"],
  "🤩": "StarStruck",
  "😍": "SmilingFaceHeartEyes",
  "😛": "FaceWithTounge",
  "🤑": "MoneyMouthFace",
  "♣": "Spades"
};
export default function App() {
  const [meaning, setMeaning] = useState("");
  var emojisWeKnow = Object.keys(emojiDictionary);
  console.log(emojisWeKnow);

  function listItemClickHandler(item) {
    const meaning = emojiDictionary[item];
    setMeaning(meaning);
  }

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    setMeaning(meaning);

    if (userInput in emojiDictionary) {
      setMeaning(emojiDictionary[userInput]);
    } else {
      setMeaning("Sorry,Not Found In Database");
    }
  }

  return (
    <div className="App">
      <h1>inside outt</h1>
      <input onChange={emojiInputHandler} />
      <h2>{meaning}</h2>
      <div className="container">
        <footer>
          <h4>About</h4>
        </footer>
        <p>
          <strong>This is an Emoji Interpreter</strong>
        </p>
        <h3>Emojis We Know</h3>
        {emojisWeKnow.map(function (emoji) {
          return (
            <span
              style={{ fontSize: "2rem", cursor: "pointer", padding: "0.5rem" }}
              key={emoji}
              onClick={() => listItemClickHandler(emoji)}
            >
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}
