import validator from 'validator';

const formValid = (elements, handleErrorMessage) => {

  let formValid = true;

  for(const element of elements) {
    const { name, type, required, value, validationMessage } = element;

    if(!required) continue;

    handleErrorMessage(name, "");

    switch(type) {
      case "email":
        if(!validator.isEmail(value)) {
          handleErrorMessage(name, validationMessage || "Email is not valid");
          formValid = false;
        }
        break;
      case "password":

        if(value.length === 0) {
          handleErrorMessage(name, validationMessage || "Required");
          formValid = false;
        } else {
 
          if(name === "passwordConfirm") {
            const passwordEl = elements.filter((el) => el.name === "password")[0];
            
            if(value !== passwordEl.value) {
              handleErrorMessage(name, validationMessage || "Password confirm must match password");
              formValid = false;
            }
          }
        }
        break;
      case "text":
      default:
        if(value.length === 0) {
          handleErrorMessage(name, validationMessage || "Required");
          formValid = false;
        }
        break;
    }

  };

  return formValid;
}
export default formValid;