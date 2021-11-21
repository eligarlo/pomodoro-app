import { useState, useRef, useEffect, useCallback } from 'react'
import './App.css'
import Button from './components/button/Button'
import Navigation from './components/navigation/Navigation'
import SettingsModal from './components/settingsModal/SettingsModal'
import Timer from './components/timer/Timer'

const App = () => {
  const [timer, setTimer] = useState(1500) // 25 min
  const [focusTime, setFocusTime] = useState(25)
  const [countDown, setCountDown] = useState(true)
  const [isActive, setIsActive] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [openSettings, setOpenSettings] = useState(false)
  const timerRef = useRef(null)

  useEffect(() => {
    countDown ? setTimer(1500) : setTimer(0)
  }, [countDown, setTimer])

  const startTimer = () => {
    setIsActive(true)
    setIsPaused(false)
    timerRef.current = setInterval(() => {
      setTimer(timer => (countDown ? timer - 1 : timer + 1))
    }, 1000)
  }

  const toggleTimer = () => {
    if (isPaused) {
      startTimer()
    } else {
      setIsPaused(true)
      clearInterval(timerRef.current)
    }
  }

  const resetTimer = () => {
    setIsActive(false)
    setIsPaused(false)
    countDown ? setTimer(1500) : setTimer(0)
  }

  const toggleSettings = () => {
    setOpenSettings(openSettings => !openSettings)
  }

  const toggleCountBackwards = () => {
    setCountDown(countDown => !countDown)
  }

  const handleFocusTimeChange = e => {
    setFocusTime(e.target.value)
    setTimer(e.target.value * 60)
  }

  return (
    <main className='App'>
      <Navigation onClick={toggleSettings} />
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

      {/* Settings Modal */}
      {openSettings && (
        <SettingsModal
          onCloseModal={toggleSettings}
          onToggleCheckbox={toggleCountBackwards}
          checked={countDown}
          focusTime={focusTime}
          onFocusTimeChange={handleFocusTimeChange}
        />
      )}
    </main>
  )
}

export default App
