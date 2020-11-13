import { Router } from "@reach/router";
import { render } from 'react-dom'
import Home from './views/Home'
import MovieDetails from './views/MovieDetails'
// import UserContextProvider from "./context/UserContext";

const App = () => {
  return (
    <Router>
      <Home path="/" />
      <MovieDetails path="/moviedetails" />
    </Router>
  );
};

render(<App />, document.querySelector("#root"));
