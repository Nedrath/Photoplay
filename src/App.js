import { Router } from "@reach/router";
import { render } from 'react-dom'
import Home from './views/Home'
// import UserContextProvider from "./context/UserContext";

const App = () => {
  return (
    <Router>
      <Home path="/" />
    </Router>
  );
};

render(<App />, document.querySelector("#root"));
