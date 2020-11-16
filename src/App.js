import { Router } from "@reach/router";
import { render } from 'react-dom'
import Home from './views/Home'
import MovieDetails from './views/MovieDetails'
import Cast from './views/Cast'
import TvShowDetails from './views/TvShowDetails'
import Search from './views/Search'
// import UserContextProvider from "./context/UserContext";

const App = () => {
  return (
    <Router>
      <Home path="/" />
      <MovieDetails path="/movie-details" />
      <Cast path="/cast" />
      <TvShowDetails path="/tv-details" />
      <Search path="/search" />
    </Router>
  );
};

render(<App />, document.querySelector("#root"));
