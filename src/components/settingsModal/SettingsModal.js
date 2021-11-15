import Checkbox from '../checkbox/Checkbox'
import { ReactComponent as BackIcon } from '../../assets/icon-back.svg'
import styles from './settingsModal.module.css'

const SettingsModal = ({ closeModal, checked, toggleCheckbox }) => {
  return (
    <div className={styles.modal}>
      <nav className={styles.nav}>
        <BackIcon className={styles.icon} onClick={closeModal} />
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
            toggleCheckbox={toggleCheckbox}
          />
        </div>
      </div>
    </div>
  )
}

export default SettingsModal
