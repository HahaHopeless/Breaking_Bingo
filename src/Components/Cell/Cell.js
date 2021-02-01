import "./Cell_styles.scss";
import React, { useState, useEffect, useRef } from "react";
import _ from "lodash";
import winimage from "../../Assets/Images/win.gif";

var arr = [0];
const Cell = ({ cellClass, cellText, cellIndex }) => {
  const [checkClass, setCheckClass] = useState("");
  const [bingo, setBingo] = useState(0);
  const [showWin, setShowWin] = useState(-100);
  var cells = null;

  useEffect(() => {
    cells = document.querySelectorAll(".cell");
    checkBingo();
  }, [checkClass]);

  useEffect(() => {
    const include = arr.includes(bingo);
    if (!include) {
      arr.push(bingo);
      setShowWin(100);
      setTimeout(() => {
        setShowWin(-100);
      }, 3000);
    } else {
      console.log("Nothing to push");
    }
  }, [bingo]);

  var BINGO_CONDITIONS = [
    // Horizontal
    [0, 1, 2, 3, 4],
    [5, 6, 7, 8, 9],
    [10, 11, 12, 13],
    [14, 15, 16, 17, 18],
    [19, 20, 21, 22, 23],
    //Vertical
    [0, 5, 10, 14, 19],
    [1, 6, 11, 15, 20],
    [2, 7, 16, 21],
    [3, 8, 12, 17, 22],
    [4, 9, 13, 18, 23],
    //Diagonal
    [0, 6, 17, 23],
    [4, 8, 15, 19],
  ];

  const checkBingo = () => {
    const getMatchedCombos = BINGO_CONDITIONS.filter((combos) => {
      return combos.every((index) => {
        const match = cells[index].classList.contains("checked");
        return match;
      });
    });

    setBingo(getMatchedCombos.length);
  };
  return (
    <>
      <div
        className={`${cellClass} ${checkClass}`}
        onClick={() => {
          if (checkClass !== "checked") {
            const brokenTextureNumber =
              Math.floor(Math.random() * (2 - 1 + 1)) + 1;
            setCheckClass(`checked broken${brokenTextureNumber}`);
          }
        }}
      >
        <p className="cellIndex">{cellIndex}</p>
        <p className="cell_text">{cellText}</p>
      </div>
      <div className="winScreen" style={{ zIndex: showWin, opacity: showWin }}>
        <img src={winimage} alt="gif" className="winImage" />
      </div>
    </>
  );
};

export default Cell;
