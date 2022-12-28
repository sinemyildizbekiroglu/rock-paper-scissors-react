/* eslint-disable default-case */
import { useState } from "react"

const App = () => {
  const [userChoice, setUserChoice] = useState(null)
  const [computerChoice, setComputerChoice] = useState(null)
  const [result, setResult] = useState(null)
  const choices = ["rock", "paper", "scissors"]

  const handleClick = (value) => {
    setUserChoice(value)
    generateComputerChoice()
    checkResult()
  }

  const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)]
    setComputerChoice(randomChoice)
  }

  const checkResult = () => {
    switch (userChoice + computerChoice) {
      case "scissorspaper":
      case "rockscissors":
      case "paperrock":
        setResult("YOU WIN!")
        break
      case "paperscissors":
      case "scissorsrock":
      case "rockpaper":
        setResult("YOU LOSE!")
        break
      case "rockrock":
      case "paperpaper":
      case "scissorsscissors":
        setResult("IT'S A DRAW!")
        break
    }
  }

  return (
    <div>
      <h1>user choice is: {userChoice} </h1>
      <h1>computer choice is: {computerChoice} </h1>
      {/* <button onClick={() => handleClick("rock")}>Rock</button>
      <button onClick={() => handleClick("paper")}>Paper</button>
      <button onClick={() => handleClick("scissors")}>Scissors</button> */}
      {choices.map((choice, index) => (
        <button key={index} onClick={() => handleClick(choice)}>
          {choice}
        </button>
      ))}
      <h1>{result}</h1>
    </div>
  )
}

export default App
