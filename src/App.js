import { useState, useRef } from 'react'
import './App.css'

const App = () => {
  const [timer, setTimer] = useState(0)
  const [isActive, setIsActive] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const timerRef = useRef(null)

  const startTimer = () => {
    setIsActive(true)
    timerRef.current = setInterval(() => {
      setTimer(timer => timer + 1)
    }, 1000)
  }

  const pauseTimer = () => {
    setIsPaused(true)
    clearInterval(timerRef.current)
  }

  const resumeTimer = () => {
    setIsPaused(false)
    timerRef.current = setInterval(() => {
      setTimer(timer => timer + 1)
    }, 1000)
  }

  const resetTimer = () => {
    setIsActive(false)
    setIsPaused(false)
    setTimer(0)
  }

  return (
    <div className='App'>
      <section>{timer}</section>

      <button className={isActive ? 'hidden' : undefined} onClick={startTimer}>
        Start
      </button>
      <button
        className={(isActive && isPaused) || (!isActive && !isPaused) ? 'hidden' : undefined}
        onClick={pauseTimer}
      >
        Pause
      </button>
      <button className={isActive && isPaused ? undefined : 'hidden'} onClick={resumeTimer}>
        Resume
      </button>
      <button className={isActive && isPaused ? undefined : 'hidden'} onClick={resetTimer}>
        Reset
      </button>
    </div>
  )
}

export default App
