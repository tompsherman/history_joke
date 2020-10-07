import React from "react";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <h1>History is a Joke</h1>
      <button>About</button>
      <button>Purchase</button>
      <button>Tell me a joke!</button>
      <br></br>
      <br></br>
      <img src="" alt="history is a joke hero image" />
      <br></br>
      <br></br>
      <div className="image-text-sections">
        <div className="text-sections">
          <h2>hey put some text in here!</h2>
          <button>and an action button!</button>
        </div>
        <div className="image-sections">
          <img src="" alt="joke image" />
        </div>
      </div>

      <div className="image-text-sections-alternate">
        <div className="text-sections-alt">
          <h2>hey put some text in here!</h2>
          <button>and an action button!</button>
        </div>
        <div className="image-sections-alt">
          <img src="" alt="joke image" />
        </div>
      </div>

      <div className="image-text-sections">
        <div className="text-sections">
          <h2>hey put some text in here!</h2>
          <button>and an action button!</button>
        </div>
        <div className="image-sections">
          <img src="" alt="joke image" />
        </div>
      </div>

      <div>
        <p>follow History is a Joke on Twitter or Facebook!</p>
        <p>Dogless America copyright 2020</p>
      </div>
    </div>
  );
};

export default App;
