import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

import { Actions } from "../constants/actions.constants";
import { 
  emptyObject,
  Unknown,
} from "../constants/form.constants";
import useFormValidation from "../hooks/form-validation.hook";

const useForm = ({
  afterSave,
  formDefaults,
  submitHandler,
  defaultFormFields,
}) => {
  const navigate = useNavigate();
  const [pageError, setPageError] = useState(null);
  const [form, setForm] = useState(formDefaults);
  const [saved, setSaved] = useState(false);
  const [saving, setSaving] = useState(false);
  const {
    checkValidationErrors,
    validationErrors,
  } = useFormValidation(form, defaultFormFields);
  
  const onAction = (action, field, value) => {
    const actionHandlers = {
      [Actions.Cancel]: () => {
        setForm(emptyObject);
        navigate("/", { replace: true });
      },
      [Actions.Clear]: () => {
        setForm({
          ...form,
          [field]: formDefaults[field]
        });
      },
      [Actions.ClearAll]: () => {
        setForm(formDefaults);
      },
      [Actions.UpdateField]: () => {
        setForm({
          ...form,
          [field]: value,
        });
      },
      [Unknown]: () => null,
    };
    const actionHandler = actionHandlers[action] || Unknown;
    
    actionHandler();
  }

  const onSubmit = (event) => {
    event.preventDefault();
    const hasValidationErrors = checkValidationErrors();

    if (!hasValidationErrors) {
      setSaving(true);
  
      setTimeout(() => {
        try {
          submitHandler(form)
          setSaved(true);
        } catch (error) { 
          setPageError(error.message);
          onAction(Actions.ClearAll);
        } finally {
          setSaving(false);
        }
      }, 3000);
    }
  };

  useEffect(() => {
    if (saved) {
      setTimeout(afterSave, 6000);
    }
  }, [afterSave, saved]);

  return {
    form,
    saved,
    saving,
    pageError,
    onAction,
    onSubmit,
    validationErrors,
  };
};

export default useForm;
