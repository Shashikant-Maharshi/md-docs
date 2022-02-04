import { useNavigate } from "react-router-dom";

import { createUserEntry } from "../../../shared/utilities/localstorage";
import useForm from "../../../shared/hooks/form.hook";

const defaultFormFields = Object.freeze({
  email: '',
  password: '',
  confirmPassword: '',
  birthday: '',
  gender: null
});

const useRegistration = () => {
  const navigate = useNavigate();
  
  const submitHandler = (form) => {
    createUserEntry(form);
  };

  const afterSave = () => {
    navigate("/login", { replace: true });
  };
  
  const formState = useForm({
    afterSave,
    formDefaults: defaultFormFields,
    submitHandler,
    defaultFormFields,
  });

  return formState;
};

export default useRegistration;
