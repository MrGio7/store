import React from "react";
import "./assets/SCSS/App.scss";

import { Footer } from "./Components";

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>header</h1>
      </div>

      <div className="body">
        <h1>body</h1>
      </div>

      <Footer />
    </div>
  );
}

export default App;
