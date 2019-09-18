import React from "react";
import { Route } from "react-router-dom";

import "./assets/SCSS/App.scss";

import { Footer, Home, Account } from "./Components";

function App() {
  return (
    <div className="App">
      <Route path='/home' component={Home} />
      <Route path="/account" component={Account} />
      <Footer />
    </div>
  );
}

export default App;
