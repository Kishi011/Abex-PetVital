import { useState } from 'react';
import './index.css';

function Input(props) {

  const [value, setValue] = useState(props.value || '');

  const update = (value) => {
    setValue(value);
    if(props.onInput) props.onInput(value);
  }

  return (
    <input 
      type={props.type}
      value={value}
      disabled={props.disabled}
      placeholder={props.placeholder}
      width={props.width}
      onInput={(event) => update(event.target.value)}
    />
  )
}

export default Input;