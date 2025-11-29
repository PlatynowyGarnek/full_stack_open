import { useState } from 'react'

const App = () => {

  const [ counter, setCounter ] = useState(0)

  const handleClick = () => {
    console.log('clicked')
  }

  console.log('rendering...', counter)

  return (
    <div>
    <div>{counter}</div>
    <button onClick={() => {setCounter(counter+1); console.log('clicked')}}>plus</button>
    <button onClick={() => {setCounter(0); console.log('clicked zero')}}>zero</button>

    </div>
  )
}

export default App