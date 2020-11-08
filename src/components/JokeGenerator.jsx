import React, {useState} from "react";
import jokedata from "../data/jokedata"

const JokeGenerator = () => {
    const [toggle, setToggle] = useState(false)
    const [joke, setJoke] = useState({
      joke: "",
      explanation: ""
    })
    const [index, setIndex] = useState(0)
  
    const randomJoke = () => {
      setToggle(true)
      let result = jokedata[index]
      setJoke(result)
      setIndex(index < 3 ? (index + 1) : (0))
    }    
    return (
        <div>
        <div className="nav-button" onClick={randomJoke}>Tell me a joke!</div>
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
            </div>                    
        </div>
    )
}

export default JokeGenerator
