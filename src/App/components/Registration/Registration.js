import Button from "../../../shared/components/Button/Button";
import TextInput from "../../../shared/components/TextInput/TextInput";
import RadioGroup from "../../../shared/components/RadioGroup/RadioGroup";
import Icons from "../../../shared/components/Icons/Icons";
import ProgressDialog from "../../../shared/components/ProgressDialog/ProgressDialog";

import { Actions } from "../../../shared/constants/actions.constants";
import useRegistration from "./registration.hook";

import './registration.scss';

const genderChoices = Object.freeze([
  { id: 'male', label: 'Male', value: 'male' },
  { id: 'Female', label: 'Female', value: 'female' },
  { id: 'other', label: 'Other', value: 'other' },
]);

const Registration = () => {
  const {
    form,
    saved,
    saving,
    onAction,
    onSubmit,
    validationErrors,
  } = useRegistration();

  return (
    <div className='box'>
      <h3>Registration</h3>
      <hr />
      {saved ? (
        <ProgressDialog
          heading="Your details submitted successfully!"
          subheading="redirecting you to login page..."
        />
      ) : (
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
            type='email'
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
          <TextInput
            id='renter-password'
            label='Re-enter Password'
            disabled={saving}
            onChange={(value) => onAction(Actions.UpdateField, 'confirmPassword', value)}
            onClear={() => onAction(Actions.Clear, 'confirmPassword')}
            placeholder='Re-enter password'
            value={form.confirmPassword}
            hint={validationErrors.confirmPassword}
            type="password"
          />
          <TextInput
            id='birthday'
            label='Date of Birth'
            disabled={saving}
            onChange={(value) => onAction(Actions.UpdateField, 'birthday', value)}
            onClear={() => onAction(Actions.Clear, 'birthday')}
            value={form.birthday}
            hint={validationErrors.birthday}
            type="date"
          />
          <RadioGroup
            id="gender-choices"
            name="gender"
            disabled={saving}
            items={genderChoices}
            onSelect={(id) => onAction(Actions.UpdateField, 'gender', id)}
            selected={form.gender}
            hint={validationErrors.gender}
          />
          <Button
            className={saving ? 'loading' : ''}
            label="Create"
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
      )}
    </div>
  );
};

export default Registration;
