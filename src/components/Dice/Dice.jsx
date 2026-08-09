import "./Dice.css";

function Dice({ player, value, isRolling }) {
  return (
    <div className={`dice ${isRolling ? "dice--rolling" : ""}`}>
      <p className="dice__player">
        {player}
      </p>

      <div className="dice__card">
        <img
          className="dice__image"
          src={`/images/dice${value}.png`}
          alt={`${player} dice showing ${value}`}
        />
      </div>
    </div>
  );
}

export default Dice;