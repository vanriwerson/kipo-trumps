import { Link } from "react-router-dom";
import "./style.css";

function MainMenu() {
  return (
    <div className="menu">
      <button className="route">
        <Link to={"/game"}>Jogar</Link>
      </button>
      
      <button className="route">
        <Link to={"/gallery"}>Baralho</Link>
      </button>
      
      <button className="route">
        <Link to={"/settings"}>Configurações</Link>
      </button>
    </div>
  );
}

export default MainMenu;
