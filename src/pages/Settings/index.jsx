import { Link } from "react-router-dom";
import "./style.css";

function Settings() {
  return (
    <>
      <h1>Settings</h1>
      <button className="route">
        <Link to={"/"}>Início</Link>
      </button>
    </>
  );
}

export default Settings;
