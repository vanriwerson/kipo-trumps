import { Link, useRouteError } from "react-router-dom";
import "./style.css";

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <button className="route">
        <Link to={"/"}>Início</Link>
      </button>
    </div>
  );
}

export default ErrorPage;
