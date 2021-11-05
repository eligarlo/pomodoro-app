import styles from './timer.module.css'

const Timer = ({ timer }) => {
  const formatSeconds = () => {
    const timerSeconds = `0${timer % 60}`.slice(-2)

    return `${timerSeconds}`
  }

  const formatMinutes = () => {
    const minutes = `${Math.floor(timer / 60)}`
    const timerMinutes = `0${minutes % 60}`.slice(-2)

    return `${timerMinutes}`
  }

  return (
    <div className={styles['timer-card']}>
      {formatMinutes()} : {formatSeconds()}
    </div>
  )
}

export default Timer
