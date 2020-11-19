import { Router } from "@reach/router";
import { render } from "react-dom";
import Home from "./views/Home";
import MovieDetails from "./views/MovieDetails";
import Cast from "./views/Cast";
import TvShowDetails from "./views/TvShowDetails";
import Search from "./views/Search";
import Downloads from "./views/Downloads";
import SearchContextProvider from "./context/SearchContext";
import SliderContextProvider from "./context/SliderContext";

const App = () => {
  return (
    <SearchContextProvider>
      <SliderContextProvider>
        <Router>
          <Home path="/" />
          <MovieDetails path="/movie-details/:id" />
          <Cast path="/cast" />
          <TvShowDetails path="/tv-details" />
          <Search path="/search" />
          <Downloads path="/downloads" />
        </Router>
      </SliderContextProvider>
    </SearchContextProvider>
  );
};

render(<App />, document.querySelector("#root"));
