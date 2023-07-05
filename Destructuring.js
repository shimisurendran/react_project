import React from 'react'

function Destructuring() {
    const [counter, setcounter] = React.useState(0);

  return (
    <div>
      {/*rfgfdg */}
      <button onClick={() => setcounter(counter + 1)}> Increment </button>
      <button onClick={() => setcounter(counter > 0 ? counter - 1 : 0)}>
        Decrement
      </button>

      <h2>Result: {counter}</h2>

    </div>
  )
}

export default Destructuring