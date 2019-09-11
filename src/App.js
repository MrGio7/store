import React from "react";
import { Route } from "react-router-dom";

import "./assets/SCSS/App.scss";

import { Footer, Home } from "./Components";

function App() {
  return (
    <div className="App">
      <Route path='/' component={Home} />
      <Footer />
    </div>
  );
}

export default App;
