import { useEffect, useRef, useState } from "react";
import Dice from "../Dice/Dice";
import "./Game.css";

function Game({ onRoundComplete }) {
  const [player1, setPlayer1] = useState(1);
  const [player2, setPlayer2] = useState(1);
  const [result, setResult] = useState("Roll Again");
  const [isRolling, setIsRolling] = useState(false);
  const [winner, setWinner] = useState(null);

  const isRollingRef = useRef(false);
  const timeoutRef = useRef(null);

  const playRollSound = () => {
    const audio = new Audio("/sounds/dice-roll.mp3");

    audio.volume = 0.35;

    audio.play().catch(() => {});
  };

  const rollDice = () => {
    if (isRollingRef.current) {
      return;
    }

    isRollingRef.current = true;

    setIsRolling(true);
    setWinner(null);
    setResult("Rolling...");

    playRollSound();

    timeoutRef.current = setTimeout(() => {
      const dice1 = Math.floor(Math.random() * 6) + 1;
      const dice2 = Math.floor(Math.random() * 6) + 1;

      setPlayer1(dice1);
      setPlayer2(dice2);

      let roundWinner = "draw";
      let roundResult = "Draw 🤝";

      if (dice1 > dice2) {
        roundWinner = "player1";
        roundResult = "Player 1 Wins 🏆";
      } else if (dice2 > dice1) {
        roundWinner = "player2";
        roundResult = "Player 2 Wins 🏆";
      }

      setWinner(roundWinner);
      setResult(roundResult);

      isRollingRef.current = false;
      setIsRolling(false);

      onRoundComplete({
        player1: dice1,
        player2: dice2,
        winner: roundWinner,
        result: roundResult,
      });
    }, 800);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (
        event.code === "Space" ||
        event.code === "Enter"
      ) {
        event.preventDefault();

        rollDice();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <section className="game">

      <div className="game__header">

        <div
          className={`game__result ${
            winner
              ? `game__result--${winner}`
              : ""
          }`}
        >
          <h1 className="game__title">
            {result}
          </h1>
        </div>

        <p className="game__subtitle">
          Roll the dice and see who wins
        </p>

      </div>

      <div className="game__players">

        <div
          className={
            winner === "player1"
              ? "game__winner"
              : ""
          }
        >
          <Dice
            player="Player 1"
            value={player1}
            isRolling={isRolling}
          />
        </div>

        <div className="game__vs">
          VS
        </div>

        <div
          className={
            winner === "player2"
              ? "game__winner"
              : ""
          }
        >
          <Dice
            player="Player 2"
            value={player2}
            isRolling={isRolling}
          />
        </div>

      </div>

      <button
        className={`game__button ${
          isRolling
            ? "game__button--disabled"
            : ""
        }`}
        onClick={rollDice}
        disabled={isRolling}
      >
        {isRolling
          ? "Rolling..."
          : "Roll Dice"}
      </button>

      <p className="game__keyboard">
        Press <kbd>SPACE</kbd> or{" "}
        <kbd>ENTER</kbd> to roll
      </p>

    </section>
  );
}

export default Game;