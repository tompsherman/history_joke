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
    
    const jokeAlert = () => {
      alert(
        `${joke.jokeQ}\n\n${joke.jokeA}\n\n${joke.explanation}`
      )
    }

    return (
      <div>
        <div className="nav-button" onClick={randomJoke}>
          Tell me a joke!
        </div>
        <div className="rando-joke">
            {jokeAlert}
        </div>
      </div>
    )
}

export default JokeGenerator
