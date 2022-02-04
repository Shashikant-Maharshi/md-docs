// In general for form field validation checks follow sementic approach mentioned in MDN
// DOC: https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation

import { useState } from 'react';
import { emptyObject } from "../constants/form.constants";
import { isEmpty } from "../utilities/is-empty";

const FormFields = Object.freeze({
  All: 'all',
  Email: 'email',
  Password: 'password',
  ConfirmPassword: 'confirmPassword',
  Birthday: 'birthday',
  Gender: 'gender'
});

const useFormValidation = (form, defaultFormFields) => {
  const [validationErrors, setValidationErrors] = useState(emptyObject);
  const formatError = (type, message, errors) => {
    errors[type] = { type: 'error', message };
  };
  const validationHandlers = {
    [FormFields.Email]: (errors) => {
      const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      let message = null;

      if (!form.email) {
        message = 'Email address is required.';
      } else if (!validRegex.test(form.email)) {
        message = 'Invalid email address.';
      }

      if (message) {
        formatError(FormFields.Email, message, errors);
      }
    },
    [FormFields.Password]: (errors) => {
      // atlease 2 alphabates, character length between 6-12 & no specials chars
      const validRegex = /^(?=(.*[A-Za-z]){2,})[A-Za-z0-9]{6,12}$/g;
      let message = null;

      if (!form.password) {
        message = 'Password is required.';
      } else if (!validRegex.test(form.password)) {
        message = 'Invalid password. It should have length of 6-12, no special chars & atleast 2 alphabates.';
      }

      if (message) {
        formatError(FormFields.Password, message, errors);
      }
    },
    [FormFields.ConfirmPassword]: (errors) => {
      // atlease 2 alphabates, character length between 6-12 & no specials chars
      const validRegex = /^(?=(.*[A-Za-z]){2,})[A-Za-z0-9]{6,12}$/g;
      let message = null;

      if (!form.confirmPassword) {
        message = 'Password is required.';
      } else if (!validRegex.test(form.confirmPassword)) {
        message = 'Invalid password. It should have length of 6-12, no special chars & atleast 2 alphabates.';
      } else if (form.confirmPassword !== form.password) {
        message = 'It should match with password field.';
      }

      if (message) {
        formatError(FormFields.ConfirmPassword, message, errors);
      }
    },
    [FormFields.Birthday]: (errors) => {
      let message = null;

      if (!form.birthday) {
        message = 'Birth date is required.';
      }

      if (message) {
        formatError(FormFields.Birthday, message, errors);
      }
    },
    [FormFields.Gender]: (errors) => {
      let message = null;

      if (!form.gender) {
        message = 'Gender is required.';
      }

      if (message) {
        formatError(FormFields.Gender, message, errors);
      }
    },
    [FormFields.All]: () => {
      const errors = {};

      for (const field of Object.keys(defaultFormFields)) {
        validationHandlers[field](errors);
      }

      setValidationErrors(errors);

      return errors;
    }
  };

  const checkValidationErrors = () => {
    const errors = validationHandlers[FormFields.All]();

    return !isEmpty(errors);
  }
  
  return {
    checkValidationErrors,
    validationErrors,
  };
};

export default useFormValidation;
