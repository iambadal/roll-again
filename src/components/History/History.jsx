import "./History.css";

function History({ history }) {
  return (
    <section className="history">
      <div className="history__header">
        <h2>Round History</h2>

        <span>{history.length} rounds</span>
      </div>

      {history.length === 0 ? (
        <div className="history__empty">
          <span>🎲</span>
          <p>No rounds played yet</p>
        </div>
      ) : (
        <div className="history__list">
          {history.map((item) => (
            <div
              className={`history__item history__item--${item.winner}`}
              key={item.id}
            >
              <span className="history__round">
                Round {item.round}
              </span>

              <div className="history__dice">
                <span>{item.player1}</span>
                <span className="history__dash">-</span>
                <span>{item.player2}</span>
              </div>

              <span className="history__result">
                {item.result}
              </span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default History;