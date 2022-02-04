import React from 'react';

import Hint from '../Hint/Hint';

import './radio-group.scss';

const RadioGroup = ({
  id,
  disabled = false,
  name,
  items,
  onSelect,
  selected,
  hint
}) => {
  return (
    <div className="radio-group | flex flex-col">
      <fieldset id={id} className="flex flex-row flex-y-center">
        {items.map((item, idx) => (
          <React.Fragment key={idx}>
            <input
              id={item.id}
              disabled={disabled}
              type="radio"
              name={name}
              checked={selected === item.id}
              onChange={() => onSelect(item.id)}
            />
            <label htmlFor={item.id}>
              {item.label}
            </label>
          </React.Fragment>
        ))}
      </fieldset>
      <Hint subject={hint} />
    </div>
  );
};

export default RadioGroup;
