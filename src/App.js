import { useState } from "react"

const App = () => {
  const [userchoice, setUserChoice] = useState(null)

  const handleClick = (value) => {
    setUserChoice(value)
  }

  return (
    <div>
      <h1>user choice is: </h1>
      <h1>computer choice is: </h1>
      <button
        onClick={() => {
          console.log("clicked")
        }}
      >
        Rock
      </button>
      <button
        onClick={() => {
          console.log("clicked")
        }}
      >
        Paper
      </button>
      <button
        onClick={() => {
          console.log("clicked")
        }}
      >
        Scissors
      </button>
    </div>
  )
}

export default App
