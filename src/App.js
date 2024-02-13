import {useState, useEffect} from 'react'

function DigitalTimer() {
  const [value, setValue] = useState(0)
  const [display, setDisplay] = useState(0)
  const [timerRunning, setTimerRunning] = useState(false)

 useEffect(() => {
  let timerId
  if(timerRunning && value > 0) {
    timerId = setInterval(() => {
      setValue(prevValue => prevValue - 1)
    },1000)
    
  }

  return () => {
    clearInterval(timerId)
  }

 }, [value, timerRunning])
  
  const onDecrease = () => {
    if (value > 0 && value === display) {
      setDisplay(prevDisplay => prevDisplay - 1)
      setValue(prevValue => prevValue - 1)
    }
  }

  const onIncrease = () => {
    if(value === display) {
      setDisplay(prevDisplay => prevDisplay + 1)
      setValue(prevValue => prevValue + 1)
    }
  }

  const onStart = () => {
    setTimerRunning(prevTimerRunning => !prevTimerRunning)
    
  }
  
  const onReset = () => {
    setTimerRunning(false)
    setValue(25)
    setDisplay(25)

    
  }

  const formatTimer = (time) => {
   //const minutes = Math.floor(time/60);
   const minutes = Math.floor(time/60);
   const seconds = time % 60;
   return `${String(minutes).padStart(2, '0')}: ${String(seconds).padStart(2, '0')}`

  

  }
  
  return (
    <div>
      <h1>{formatTimer(value)}</h1>
      <button onClick={onStart}>{timerRunning? "Pause" : "Start"}</button> <br/>  <br/>
      <button onClick={onReset}>Reset</button>  <br/>  <br/>
      <button onClick = {onDecrease}>-</button> <button>{display}</button> <button onClick = {onIncrease}>+</button>

    
    </div>

  )
}

export default DigitalTimer