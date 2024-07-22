import { Link } from "react-router-dom";
import "./style.css";

function Gallery() {
  return (
    <>
      <h1>Gallery</h1>
      <button className="route">
        <Link to={"/"}>Início</Link>
      </button>
    </>
  );
}

export default Gallery;
