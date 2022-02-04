import { useNavigate } from "react-router-dom";

import {
  checkCredentialsMatch,
  createUserSession,
} from "../../../shared/utilities/localstorage";
import useForm from "../../../shared/hooks/form.hook";
import { EventTypes } from "../../../shared/constants/session-event-types.constants";

const defaultFormFields = Object.freeze({
  email: '',
  password: '',
});

const useLogin = () => {
  const navigate = useNavigate();
  
  const submitHandler = (form) => {
    const isCredentialsMatch = checkCredentialsMatch(form);

    if (!isCredentialsMatch) {
      throw new Error('Invalid credentials. Please try again.');
    } else {  
      createUserSession(form.email);
    }
  };
  
  const afterSave = () => {
    // let the app know login done to load login-routes
    const event = new Event(EventTypes.OnLogin);
    window.dispatchEvent(event);
    
    // navigate to home page through login-routes
    navigate("/", { replace: true });
  };
  
  const formState = useForm({
    afterSave,
    formDefaults: defaultFormFields,
    submitHandler,
    defaultFormFields,
  });

  return formState;
};

export default useLogin;
