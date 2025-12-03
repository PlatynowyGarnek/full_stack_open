import { useState } from 'react'


  const Button = ({buttonType,text}) => {
    return (
      <button onClick={buttonType}>{text}</button>
    )
  }



const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodButtonClicked = () => {
    const newGood = good
    return (
      
      setGood(newGood +1)
    )
  }

    const neutralButtonClicked = () => {
    const newNeutral = neutral
    return (
      
      setNeutral(newNeutral +1)
    )
  }

    const badButtonClicked = () => {
    const newBad = bad
    return (
      
      setBad(newBad +1)
    )
  }
  const averageScore = () => {
    
    const goodScore = good * 1
    const neutralScore = neutral * 0
    const badScore = bad * -1
    if (good + neutral + bad === 0) {
      return 0
    }
    return (
      (goodScore + neutralScore + badScore) / (good + neutral + bad)
    )
  }
  const positiveFeedback = () => {
    if (good + neutral + bad === 0) {
      return "0 %"
    }
    const percentage = (good / (good + neutral + bad)) * 100
    return (
      percentage.toFixed(2) + " %"
    )
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <Button buttonType={goodButtonClicked} text="good" />
      <Button buttonType={neutralButtonClicked} text="neutral" />
      <Button buttonType={badButtonClicked} text="bad" />
      <h1>Statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {good + neutral + bad}</p>
      <p>average {averageScore()}</p>
      <p>positive {positiveFeedback()}</p>
    </div>
  )
}

export default App