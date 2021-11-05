import { useState, useRef } from 'react'
import './App.css'
import Button from './components/button/Button'
import Timer from './components/timer/Timer'

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

  const toggleTimer = () => {
    if (isPaused) {
      setIsPaused(false)
      timerRef.current = setInterval(() => {
        setTimer(timer => timer + 1)
      }, 1000)
    } else {
      setIsPaused(true)
      clearInterval(timerRef.current)
    }
  }

  const resetTimer = () => {
    setIsActive(false)
    setIsPaused(false)
    setTimer(0)
  }

  return (
    <main className='App'>
      <section className='timer-wrapper'>
        <Timer timer={timer} />
      </section>
      <section className='btns-wrapper'>
        {!isActive && (
          <Button onClick={startTimer} btnColor='#70a288'>
            Start to Focus
          </Button>
        )}
        {isActive && (
          <Button
            onClick={toggleTimer}
            btnColor={isPaused ? '#70a288' : '#dab785'}
            textColor={isPaused ? '#FFF' : '#000'}
          >
            {isPaused ? 'Continue' : 'Pause'}
          </Button>
        )}
        {isActive && isPaused && (
          <Button onClick={resetTimer} btnColor='#d5896f'>
            Reset
          </Button>
        )}
      </section>
    </main>
  )
}

export default App
