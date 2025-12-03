import { useState } from 'react'


  const StatisticLine = ({value, text}) => {
    
    return (
      
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
    
    )

  }
  const Statistics = ({good, neutral, bad}) => {
    if (good + neutral + bad === 0) {return (<p>No feedback given</p>)}
    return (
      
        <table>
          <tbody>
          <StatisticLine text="good" value= {good} />
          <StatisticLine text="neutral" value= {neutral} />
          <StatisticLine text="bad" value= {bad} />
          <StatisticLine text="all" value= {good + neutral + bad} />
          <StatisticLine text="average" value= {((good - bad) / (good + neutral + bad)).toFixed(2)} />
          <StatisticLine text="positive" value= {(good / (good + neutral + bad) * 100).toFixed(2) + " %"} />
          </tbody>
        </table>
      
    )
  }

  
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

  return (
    <div>
      <h1>Give feedback</h1>
      <Button buttonType={goodButtonClicked} text="good" />
      <Button buttonType={neutralButtonClicked} text="neutral" />
      <Button buttonType={badButtonClicked} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App