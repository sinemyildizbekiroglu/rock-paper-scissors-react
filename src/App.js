const App = () => {
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
