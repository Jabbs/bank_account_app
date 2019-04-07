// import { FormGroup, HelpBlock, FormControl } from 'react-bootstrap';
import PropTypes from 'prop-types'

const TextInput = (props) => {
  const { input, label, type, meta: { touched, error, warning }, displayAllErrors, ...other} = props;

  let helpText;
  let validationState;
  if ((touched || displayAllErrors) && error){
    helpText = <span>{error}</span>;
    validationState = "error";
  } else if (warning){
    helpText = <span>{warning}</span>;
    validationState = "warning";
  }
  return null;
  return (
    <FormGroup className="component-library full-width-form-field" validationState={validationState}>
      <FormControl {...input} {...other} type={type}/>
      <label htmlFor="" placeholder={label} alt={label}></label>
      <HelpBlock>{helpText}</HelpBlock>
    </FormGroup>
  );
};

TextInput.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  type: PropTypes.string,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
    warning: PropTypes.string,
  }).isRequired,
};

TextInput.defaultProps = {
  meta: {
    touched: false,
  },
};

export default TextInput;
