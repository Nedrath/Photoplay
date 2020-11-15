import { Router } from "@reach/router";
import { render } from 'react-dom'
import Home from './views/Home'
import MovieDetails from './views/MovieDetails'
import Cast from './views/Cast'
import TvShowDetails from './views/TvShowDetails'
// import UserContextProvider from "./context/UserContext";

const App = () => {
  return (
    <Router>
      <Home path="/" />
      <MovieDetails path="/moviedetails" />
      <Cast path="/Cast" />
      <TvShowDetails path="/TV-Details" />
    </Router>
  );
};

render(<App />, document.querySelector("#root"));
