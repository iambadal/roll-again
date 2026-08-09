import "./Scoreboard.css";

function Scoreboard({ player1Score, player2Score, round }) {
  return (
    <section className="scoreboard">
      <div className="scoreboard__item">
        <span className="scoreboard__label">
          Player 1
        </span>

        <span className="scoreboard__score">
          {player1Score}
        </span>
      </div>

      <div className="scoreboard__divider">
        <span>Round</span>
        <strong>{round}</strong>
      </div>

      <div className="scoreboard__item">
        <span className="scoreboard__label">
          Player 2
        </span>

        <span className="scoreboard__score">
          {player2Score}
        </span>
      </div>
    </section>
  );
}

export default Scoreboard;