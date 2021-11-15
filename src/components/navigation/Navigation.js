import PropTypes from 'prop-types'
import { ReactComponent as SettingsIcon } from '../../assets/icon-settings.svg'
import styles from './navigation.module.css'

const Navigation = ({ onClick }) => {
  return (
    <nav className={styles.navigation}>
      <SettingsIcon className='icon' onClick={onClick} />
    </nav>
  )
}

Navigation.propTypes = {
  onclick: PropTypes.func,
}

export default Navigation
