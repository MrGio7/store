import React from 'react';
import './assets/SCSS/App.scss';

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>header</h1>
      </div>

      <div className="body">
        <h1>body</h1>
      </div>

      <div className="footer">
        <div className='home'>
          <h2>Home</h2>
        </div>

        <div className="categories">
          <h2>Categ.</h2>
        </div>

        <div className="delivery">
          <h2>deliv</h2>
        </div>

        
        <div className="search">
          <h2>Search</h2>
        </div>

        <div className="me">
          <h2>Me</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
