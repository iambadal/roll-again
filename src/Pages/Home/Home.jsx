import { useState } from "react";
import Game from "../../components/Game/Game";
import History from "../../components/History/History";
import "./Home.css";

function Home() {
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  const [round, setRound] = useState(0);
  const [history, setHistory] = useState([]);

  const handleRoundComplete = (roundData) => {
    const nextRound = round + 1;

    setRound(nextRound);

    setHistory((previousHistory) => [
      {
        id: Date.now(),
        round: nextRound,
        player1: roundData.player1,
        player2: roundData.player2,
        winner: roundData.winner,
        result: roundData.result,
      },
      ...previousHistory,
    ]);

    if (roundData.winner === "player1") {
      setPlayer1Score((previousScore) => previousScore + 1);
    }

    if (roundData.winner === "player2") {
      setPlayer2Score((previousScore) => previousScore + 1);
    }
  };

  const resetGame = () => {
    setPlayer1Score(0);
    setPlayer2Score(0);
    setRound(0);
    setHistory([]);
  };

  return (
    <main className="home">

      <div className="home__glow home__glow--one" />
      <div className="home__glow home__glow--two" />

      <div className="home__container">

        <header className="home__header">
          <div className="home__brand">
            <span className="home__brand-icon">
              🎲
            </span>

            <span className="home__brand-text">
              Roll Again
            </span>
          </div>
        </header>

        <section className="scoreboard">

          <div className="scoreboard__item">
            <span className="scoreboard__label">
              PLAYER 1
            </span>

            <strong className="scoreboard__score">
              {player1Score}
            </strong>
          </div>

          <div className="scoreboard__round">
            <span>ROUND</span>

            <strong>
              {round}
            </strong>
          </div>

          <div className="scoreboard__item">
            <span className="scoreboard__label">
              PLAYER 2
            </span>

            <strong className="scoreboard__score">
              {player2Score}
            </strong>
          </div>

        </section>

        <Game
          onRoundComplete={handleRoundComplete}
        />

        <History history={history} />

        <button
          className="home__reset"
          onClick={resetGame}
        >
          <span>↻</span>
          Reset Game
        </button>

        <footer className="home__footer">

  <div className="home__game-brand">
    <span>🎲</span>
    <span>Roll Again</span>
    <span>🎲</span>
  </div>

  <div className="home__creator">
    <span>Built by</span>

    <a href="https://badal-os-portfolio-5qde.vercel.app/" target="_blank" rel="noopener noreferrer">
      Badal Pujhari
    </a>
  </div>

  <div className="home__links">
    <a href="https://badal-os-portfolio-5qde.vercel.app/" target="_blank" rel="noopener noreferrer" >
      Portfolio
    </a>

    <span>•</span>

    <a href="https://github.com/iambadal" target="_blank" rel="noopener noreferrer" >
      GitHub
    </a>
  </div>

  <p className="home__copyright">
    © {new Date().getFullYear()} Badal Pujhari. All rights reserved.
  </p>

</footer>

      </div>

    </main>
  );
}

export default Home;