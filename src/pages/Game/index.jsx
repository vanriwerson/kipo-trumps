import { Link } from "react-router-dom";
import "./style.css";

function Game() {
  return (
    <>
      <h1>Game</h1>
      <button className="route">
        <Link to={"/"}>Início</Link>
      </button>
    </>
  );
}

export default Game;
