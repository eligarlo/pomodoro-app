import Checkbox from '../checkbox/Checkbox'
import { ReactComponent as BackIcon } from '../../assets/icon-back.svg'
import styles from './settingsModal.module.css'

const SettingsModal = ({
  onCloseModal,
  checked,
  onToggleCheckbox,
  focusTime,
  onFocusTimeChange,
}) => {
  return (
    <div className={styles.modal}>
      <nav className={styles.nav}>
        <BackIcon className={styles.icon} onClick={onCloseModal} />
      </nav>
      <div className={styles['modal-content']}>
        <div className={styles['modal-countdown']}>
          <span>Countdown:</span>
          <Checkbox
            htmlFor='backwards'
            label='Countdown'
            inputName='isBackwards'
            isChecked={checked}
            inputId='backwards'
            toggleCheckbox={onToggleCheckbox}
          />
        </div>

        <div className={styles['modal-total-focus']}>
          <span>Focus (min):</span>
          <input type='number' defaultValue={focusTime} onChange={onFocusTimeChange} />
        </div>
      </div>
    </div>
  )
}

export default SettingsModal
