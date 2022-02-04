import Icons from "../Icons/Icons";
import Button from "../Button/Button";
import Hint from "../Hint/Hint";

import './text-input.scss';

const TextInput = ({
  id,
  className,
  label,
  onChange,
  onClear,
  onSubmit,
  isSearchBox = false,
  placeholder,
  value,
  hint,
  ...props
}) => {
  const classes = [];

  const handleEvent = (event) => {
    if (isSearchBox && (event.key === 'Enter' || event.key === 'NumpadEnter')) {
      onSubmit();
    } else if (event.key === 'Escape') {
      onClear();
    } else if (event.type === 'change') {
      onChange(event.target.value);
    }
  };

  if (className) classes.push(className);

  return (
    <div className="text-input | flex flex-col">
      {label && (
        <label htmlFor={id}>{ label }</label>
      )}
      <div className="flex flex-row flex-y-center">
        <input
          id={id}
          className={className}
          type="text"
          placeholder={placeholder}
          onKeyDown={handleEvent}
          onChange={handleEvent}
          autoComplete="off"
          value={value}
          {...props}
        />
        {isSearchBox && value && (
          <Button
            className='clear-button'
            onClick={onClear}
            label='Clear'
            icon={<Icons type='cross' />}
            hasText={false}
          />
        )}
      </div>
      <Hint subject={hint} />
    </div>
  );
};

export default TextInput;
