import React, {useState} from "react";
import jokedata from "./data/jokedata"

import "./App.css";

const App = () => {
  const [toggle, setToggle] = useState(false)

  const randomJoke = () => {
    setToggle(true)
    let random = Math.floor(Math.random()*4) 
    let result = jokedata[random]
    console.log( result) 

  }

  return (
    <div className="App">
      <h1>History is a Joke</h1>
      <button>About</button>
      <button>Purchase</button>
      <button onClick={randomJoke}>Tell me a joke!</button>
      <br></br>
      <div>
        {
          toggle ? (
              <div>
                <h3>So you want a joke, eh?</h3>
                <p> this is the joke </p>
                <p> this is the explanation</p>
              </div>
            ) : (null)
        }
      </div>
      <br></br>
      <img className="hero-image"
        src="https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/95733817_2604194516567196_2046409293565001728_o.jpg?_nc_cat=111&_nc_sid=e3f864&_nc_ohc=QXEEz4KLvf8AX9iGB8R&_nc_ht=scontent-iad3-1.xx&oh=ade0cf1d4ee02b7326213943b87aa7f8&oe=5FA37A10"
        alt="history is a joke hero image"
      />
      <br></br>
      <br></br>
      <div className="image-text-sections">
        <div className="text-sections">
          <h2>hey put some text in here!</h2>
          <button>and an action button!</button>
        </div>
        <div className="image-sections">
          <img className="body-image"
            src="https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/95100244_2603588853294429_4865999321310429184_n.png?_nc_cat=109&_nc_sid=09cbfe&_nc_ohc=evxCmziLMvsAX961eO6&_nc_ht=scontent-iad3-1.xx&oh=4b743f9ba6976d439ff8bbc32e9b7a73&oe=5FA452ED"
            alt="joke image"
          />
        </div>
      </div>
      
      <div className="image-text-sections-alternate">
        <div className="text-sections-alt">
          <h2>hey put some text in here!</h2>
          <button>and an action button!</button>
        </div>
        <div className="image-sections-alt">
          <img
          className="body-image"
            src="https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/95100244_2603588853294429_4865999321310429184_n.png?_nc_cat=109&_nc_sid=09cbfe&_nc_ohc=evxCmziLMvsAX961eO6&_nc_ht=scontent-iad3-1.xx&oh=4b743f9ba6976d439ff8bbc32e9b7a73&oe=5FA452ED"
            alt="joke image"
          />
        </div>
      </div>

      <div className="image-text-sections">
        <div className="text-sections">
          <h2>hey put some text in here!</h2>
          <button>and an action button!</button>
        </div>
        <div className="image-sections">
          <img
          className="body-image"
            src="https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/95100244_2603588853294429_4865999321310429184_n.png?_nc_cat=109&_nc_sid=09cbfe&_nc_ohc=evxCmziLMvsAX961eO6&_nc_ht=scontent-iad3-1.xx&oh=4b743f9ba6976d439ff8bbc32e9b7a73&oe=5FA452ED"
            alt="joke image"
          />
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
