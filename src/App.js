import React, { useState } from "react";
import { Router, Link } from "@reach/router";
import ReactDOM from "react-dom";
import SearchParams from "./SearchParams";
import Details from "./Details";
import ThemeContext from "./ThemeContext";

const App = () => {
  const themeHook = useState("peru");
  return (
    <ThemeContext.Provider value={themeHook}>
      <div>
        <header>
          <Link to="/">
            <h1>Adopt Me!</h1>
          </Link>
        </header>

        <Router>
          <SearchParams path="/" />
          <Details path="details/:id" />
        </Router>
      </div>
    </ThemeContext.Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
