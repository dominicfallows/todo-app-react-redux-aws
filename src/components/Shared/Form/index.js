import React from 'react';
import PropTypes from 'prop-types';

import formValid from "./formValidate";
import FormInput from "./FormInput";

class Form extends React.Component {

  render() {
    const { onSubmit, handleErrorMessage, elements, children } = this.props;
    let onSubmitWrapper;

    if(onSubmit) onSubmitWrapper = (e) => { 
      e.preventDefault(); 
      if(formValid(elements, handleErrorMessage)) return onSubmit();
    };
    
    return (
      <form onSubmit={onSubmitWrapper}>
        {elements.map((element, i) => <FormInput key={i} {...element} />)}
        { children }
      </form>
    );

  }
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  handleErrorMessage: PropTypes.func.isRequired,
  elements: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.bool
    ]),
    required: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    errorMessage: PropTypes.string,
    validationMessage: PropTypes.string
  })).isRequired,
};

export default Form;