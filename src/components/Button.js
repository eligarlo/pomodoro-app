import PropTypes from 'prop-types'
import styles from './button.module.css'

const Button = ({ children, onClick, btnColor, textColor }) => {
  const btnColors = {
    backgroundColor: btnColor || 'teal',
    color: textColor || 'white',
  }

  return (
    <button className={styles.btn} style={btnColors} onClick={onClick}>
      {children || 'Button'}
    </button>
  )
}

Button.propTypes = {
  onclick: PropTypes.func.isRequired,
  btnColor: PropTypes.string,
  textColor: PropTypes.string,
}

export default Button
