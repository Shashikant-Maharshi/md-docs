import Button from "../../../shared/components/Button/Button";
import Icons from "../../../shared/components/Icons/Icons";
import TextInput from "../../../shared/components/TextInput/TextInput";
import ProgressDialog from "../../../shared/components/ProgressDialog/ProgressDialog";

import { Actions } from "../../../shared/constants/actions.constants";
import useLogin from "./login.hook";

const Login = () => {
  const {
    form,
    saved,
    saving,
    pageError,
    onAction,
    onSubmit,
    validationErrors,
  } = useLogin();

  return (
    <div className='box'>
      <h3>Login</h3>
      <hr />
      {saved ? (
        <ProgressDialog
          heading="Login successful!"
          subheading="redirecting you to home page..."
        />
      ) : (
        <>
          {pageError && (
            <div className="error-prompt | flex flex-row flex-y-center">
              {pageError}
            </div>
          )}
          <form onSubmit={onSubmit}>
            <TextInput
              id='email-id'
              label='Email'
              disabled={saving}
              onChange={(value) => onAction(Actions.UpdateField, 'email', value)}
              onClear={() => onAction(Actions.Clear, 'email')}
              placeholder='Enter email address'
              value={form.email}
              hint={validationErrors.email}
            />
            <TextInput
              id='password'
              label='Password'
              disabled={saving}
              onChange={(value) => onAction(Actions.UpdateField, 'password', value)}
              onClear={() => onAction(Actions.Clear, 'password')}
              placeholder='Enter password'
              value={form.password}
              hint={validationErrors.password}
              type="password"
            />
            <Button
              className={saving ? 'loading' : ''}
              label="Submit"
              disabled={saving}
              type="submit"
              icon={(
                saving
                  ? <Icons type='refresh' />
                  : undefined
              )}
              hasText={!saving}
              hasBorder
            />
            <Button
              label="Cancel"
              disabled={saving}
              onClick={() => onAction(Actions.Cancel)}
              hasBorder
            />
          </form>
        </>
      )}
    </div>
  );
};

export default Login;
