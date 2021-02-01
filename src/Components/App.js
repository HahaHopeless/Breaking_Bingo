import "./App.scss";
import React, { useEffect, useState } from "react";
import VanillaTilt from "vanilla-tilt";
// import Button from "../Components/Button/Button";
import BingoBoard from "../Components/BingoBoard/BingoBoard";

const App = () => {
  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll(".js-tilt"), {
      max: 20,
      speed: 400,
      glare: true,
      gyroscope: true,
      gyroscopeMinAngleX: -45,
      gyroscopeMaxAngleX: 45,
      gyroscopeMinAngleY: -45,
      gyroscopeMaxAngleY: 45,
    });
  }, []);

  return (
    <div className="body">
      <h1 className="game_title">BREAKING BINGO</h1>
      <div className="container">
        <div className="bingoBoard">
          <BingoBoard />
        </div>
      </div>
      {/* <div className="controls">
        <Button/>
      </div> */}
    </div>
  );
};

export default App;
