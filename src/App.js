import React from "react";
import { Router } from "@reach/router";
import UserContextProvider from "./context/UserContext";

const App = () => {
  return (
    <Router>
      <Home path="./Home" />
    </Router>
  );
};

render(<App />, document.querySelector("#root"));
