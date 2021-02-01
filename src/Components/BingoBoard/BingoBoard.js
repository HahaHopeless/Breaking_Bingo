import "./BingoBoard_styles.scss";
import React from "react";
import Cell from "../Cell/Cell";

const Row = () => {
  const bingoDares = [
    "Brush The Teeth Of The Person Sitting Next To You",
    "Pretend To Be A Cat",
    "Go Outside And Dance Like A Cowboy",
    "Do A Five Minute Comedy Act",
    "Call A Chinese Restaurant And Order A Pizza",
    "Put Chocolate Syrup On A Pickle And Eat It",
    "Moonwalk Across The Room",
    "Go Outside & Do The Chicken Dance For 1 Minute",
    "Act Out A Favorite Scene From A Movie",
    "Try To Lick Your Elbow",
    "Imitate Someone You Hate The Most",
    "Say The Alphabet Backward",
    "Look Someone In The Eyes & Tell Them They Are Charming",
    "Color One Of Your Front Teeth Black",
    "Sing A Song As If You Were Sick",
    "Put Toilet Paper On Your Body Like A Mummy",
    "Make Up A Rap About Pizza And Chips",
    "Pretend To Be The Person On Your Right For 1 Minute",
    "Talk Without Closing Your Mouth",
    "Talk To A Pillow Like It’s Your Crush",
    "Sing Like An Opera Singer",
    "Go Outside And Try To Summon The Rain",
    "Lay On The Floor And Act Like A Piece Of Frying Bacon",
    "Pour A Gallon Of Milk Over Your Head",
    "Call Aldi And Ask If They’re Open",
    "Get Into A Debate With A Wall",
    "Call A Random Number And Start Singing",
    "Text Someone Using Only Your Nose",
  ];
  const randomText = bingoDares.sort(() => Math.random() - 0.5);

  return (
    <>
      <div className="row">
        <Cell cellClass="cell js-tilt" cellText={randomText[0]} cellIndex="1" />
        <Cell cellClass="cell js-tilt" cellText={randomText[1]} cellIndex="2" />
        <Cell cellClass="cell js-tilt" cellText={randomText[2]} cellIndex="3" />
        <Cell cellClass="cell js-tilt" cellText={randomText[3]} cellIndex="4" />
        <Cell cellClass="cell js-tilt" cellText={randomText[4]} cellIndex="5" />
      </div>
      <div className="row">
        <Cell cellClass="cell js-tilt" cellText={randomText[5]} cellIndex="6" />
        <Cell cellClass="cell js-tilt" cellText={randomText[6]} cellIndex="7" />
        <Cell cellClass="cell js-tilt" cellText={randomText[7]} cellIndex="8" />
        <Cell cellClass="cell js-tilt" cellText={randomText[8]} cellIndex="9" />
        <Cell
          cellClass="cell js-tilt"
          cellText={randomText[9]}
          cellIndex="10"
        />
      </div>
      <div className="row">
        <Cell
          cellClass="cell js-tilt"
          cellText={randomText[10]}
          cellIndex="11"
        />
        <Cell
          cellClass="cell js-tilt"
          cellText={randomText[11]}
          cellIndex="12"
        />
        <Cell
          cellClass="free_space"
          cellText={`The "Go Find Yourself" Space`}
        />
        <Cell
          cellClass="cell js-tilt"
          cellText={randomText[12]}
          cellIndex="13"
        />
        <Cell
          cellClass="cell js-tilt"
          cellText={randomText[13]}
          cellIndex="14"
        />
      </div>
      <div className="row">
        <Cell
          cellClass="cell js-tilt"
          cellText={randomText[14]}
          cellIndex="15"
        />
        <Cell
          cellClass="cell js-tilt"
          cellText={randomText[15]}
          cellIndex="16"
        />
        <Cell
          cellClass="cell js-tilt"
          cellText={randomText[16]}
          cellIndex="17"
        />
        <Cell
          cellClass="cell js-tilt"
          cellText={randomText[17]}
          cellIndex="18"
        />
        <Cell
          cellClass="cell js-tilt"
          cellText={randomText[18]}
          cellIndex="19"
        />
      </div>
      <div className="row">
        <Cell
          cellClass="cell js-tilt"
          cellText={randomText[19]}
          cellIndex="20"
        />
        <Cell
          cellClass="cell js-tilt"
          cellText={randomText[20]}
          cellIndex="21"
        />
        <Cell
          cellClass="cell js-tilt"
          cellText={randomText[21]}
          cellIndex="22"
        />
        <Cell
          cellClass="cell js-tilt"
          cellText={randomText[22]}
          cellIndex="23"
        />
        <Cell
          cellClass="cell js-tilt"
          cellText={randomText[23]}
          cellIndex="24"
        />
      </div>
    </>
  );
};

export default Row;
