import PropTypes from 'prop-types'
import styles from './checkbox.module.css'

const Checkbox = ({ htmlFor, label, inputName, isChecked, inputId, toggleCheckbox }) => {
  return (
    <>
      <input
        type='checkbox'
        name={inputName}
        checked={isChecked}
        id={inputId}
        onChange={toggleCheckbox}
      />
      <label htmlFor={htmlFor}>{label}: </label>
    </>
  )
}

Checkbox.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  isChecked: PropTypes.bool.isRequired,
  inputId: PropTypes.string.isRequired,
}

export default Checkbox
