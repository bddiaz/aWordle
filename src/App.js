import "./App.css";
import React, { useState, useEffect } from "react";
import Tiles from "./Tiles.js";

function App() {
  const [currentGuess, setCurrentGuess] = useState("");
  const [finalGuess, setFinalGuess] = useState("");
  const [isGuessing, setIsGuessing] = useState(true);
  const [currentWordle, setCurrentWordle] = useState("trace");
  const [livesUsed, setLivesUsed] = useState(-1);
  const [tileValues, setTileValues] = useState([
    { value: [-1, -1, -1, -1, -1], key: 0 },
    { value: [-1, -1, -1, -1, -1], key: 1 },
    { value: [-1, -1, -1, -1, -1], key: 2 },
    { value: [-1, -1, -1, -1, -1], key: 3 },
    { value: [-1, -1, -1, -1, -1], key: 4 },
    { value: [-1, -1, -1, -1, -1], key: 5 },
  ]);

  // handles an attempted guess submission
  function handleGuessSubmit(e) {
    e.preventDefault();
    setFinalGuess(currentGuess);
    setCurrentGuess("");
  }

  useEffect(() => {
    if (livesUsed === -1) {
      setLivesUsed(0);
    } else {
      let temp = [];
      for (let i = 0; i < 5; i++) {
        let found = false;
        for (let j = 0; j < 5; j++) {
          if (finalGuess[i] === currentWordle[j]) {
            found = true;
            if (i === j) {
              //console.log(finalGuess[j]);
              temp.push(2);
            } else {
              temp.push(1);
            }
          }
        }
        //IF NOTHING IS FOUND, ADD 0 TO Temp
        if (found === false) {
          temp.push(0);
        }
      }
      let valTemp = { value: temp, key: livesUsed };
      const tempVals = [...tileValues];
      tempVals[livesUsed] = valTemp;
      setLivesUsed(livesUsed + 1);
      const testArray = [
        { value: [1, 1, 1, 1, 1], key: 0 },
        { value: [-1, -1, -1, -1, -1], key: 1 },
        { value: [-1, -1, -1, -1, -1], key: 2 },
        { value: [-1, -1, -1, -1, -1], key: 3 },
        { value: [-1, -1, -1, -1, -1], key: 4 },
        { value: [-1, -1, -1, -1, -1], key: 5 },
      ];
      //setTileValues(testArray);
      //setTileValues(tempVals);
      console.log(testArray === tempVals);
      console.log(tempVals);
      console.log(testArray);
    }
  }, [finalGuess]);

  // need this function and currentGues state to display current value
  function handleGuessChange(e) {
    setCurrentGuess(e);
  }
  // In future, need to add a lot of validation to this function
  // ie. is it a word, no nums, right lenth,etc.
  function submitFinalGuess(wordValues) {
    setIsGuessing(false);
    for (let i = 0; i < 5; i++) {
      if (wordValues[i] == 0) {
      }
      if (wordValues[i] == 1) {
      }
      if (wordValues[i] == 2) {
      }
    }
  }

  return (
    <div className="App">
      <div className="headerContainer">
        <h1 className="header">Wordle Copy</h1>
        <div className="FormContainer">
          <form onSubmit={handleGuessSubmit}>
            <input
              type="text"
              placeholder="Make guess"
              maxLength="5"
              value={currentGuess}
              onChange={(e) => {
                handleGuessChange(e.target.value);
              }}
            />
            <button type="button">Submit</button>
          </form>
        </div>
        <div className="TilesSection">
          <Tiles
            tileValues={tileValues}
            wordle={currentWordle}
            guess={finalGuess}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
