import React, {useState} from "react";
import jokedata from "./data/jokedata"

import "./App.css";
import JokeGenerator from "./components/JokeGenerator"

const App = () => {
  // const [toggle, setToggle] = useState(false)
  // const [joke, setJoke] = useState({
  //   joke: "",
  //   explanation: ""
  // })
  // const [index, setIndex] = useState(0)

  // const randomJoke = () => {
  //   setToggle(true)
  //   let result = jokedata[index]
  //   setJoke(result)
  //   setIndex(index<3? (index+1):(0))
  // }

  
  return (
    <div className="App">
      <h1>History is a Joke</h1>
      <div className="nav-button" onClick="location.href='https://www.amazon.com/U-S-History-Joke-Billy-Peden/dp/B087629N8S'">
            About
      </div>
      <button src="https://www.amazon.com/U-S-History-Joke-Billy-Peden/dp/B087629N8S">Purchase</button>
      <JokeGenerator />
      {/*<button onClick={randomJoke}>Tell me a joke!</button>
      <br></br>
      <div className="rando-joke">
        {
          toggle ? (
              <div>
                <h3>So you want a joke, eh?</h3>
                <p>{joke.jokeQ}</p>
                <p>{joke.jokeA}</p>
                <p>{joke.explanation}</p>
                 { index === 0?
                   (<a href={joke.url}>get the book</a>):(null)}
              </div>
            ) : (null)
        }
      </div> */}
      <br></br>
      <img className="hero-image"
        src="https://res.cloudinary.com/dzom9ahsn/image/upload/v1604867236/history%20isa%20joke/hjoke_hero_ozfoyt.jpg"
        alt="history is a joke hero image"
      />
      <br></br>
      <br></br>
      <div className="image-text-sections">
        <div className="text-sections">
          <h2>History is a Joke...Book is the first, funniest historically accurate history joke textbook in the world!</h2>
          <p>Do you ever get the feeling history is a joke? If so, you might be right! While history is normally written by the victors, this time its written by professional comedians. History Is a Joke Vol. 1 is a comedic crash course in Early American history, from its discovery in 1492 through the start of the Civil War, and is great for students, history buffs, and jokers alike!</p>
          <br></br>
          <button href="https://www.amazon.com/U-S-History-Joke-Billy-Peden/dp/B087629N8S">Stop dillydallying buy the book!</button>
        </div>
        <div className="image-sections">
          <img className="body-image"
            src="https://res.cloudinary.com/dzom9ahsn/image/upload/v1604867239/history%20isa%20joke/hjoke_prof_btxsxw.png"
            alt="joke image"
          />
        </div>
      </div>
      
      <div className="image-text-sections-alternate">
        <div className="text-sections-alt">
          <h2>Laugh while you learn!!!</h2>
          <p>Like history textbooks, this book is loaded with facts! Unlike history textbooks, this book is hilarious! 
          <br>
          </br>
          Factual and funny, this book is chock full of 100% original, hilarious jokes, puns, & witticisms along with historically accurate explanations. They say those who do not learn history are doomed to repeat it, but with History Is A Joke every time you repeat history you'll be rewarded with laughter, praise, and adoration from friends, family, and even random strangers on the bus</p>
         <a href="https://www.amazon.com/U-S-History-Joke-Billy-Peden/dp/B087629N8S"> <button>I get to laugh & learn? Take my money!</button></a>
        </div>
        <div className="image-sections-alt">
          <img
          className="body-image"
            src="https://res.cloudinary.com/dzom9ahsn/image/upload/v1604867239/history%20isa%20joke/hjoke_prof_btxsxw.png"
            alt="joke image"
          />
        </div>
      </div>

      <div className="image-text-sections">
        <div className="text-sections">
          <h2>This book was co-authored by a teacher, a mad scientist, and two professional comedians!</h2>
          <a href="https://www.amazon.com/U-S-History-Joke-Billy-Peden/dp/B087629N8S"><button>What more could you ask for?!?</button></a>
        </div>
        <div className="image-sections">
          <img
          className="body-image"
            src="https://res.cloudinary.com/dzom9ahsn/image/upload/v1604867239/history%20isa%20joke/hjoke_prof_btxsxw.png"
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
