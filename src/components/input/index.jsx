import { useState } from 'react';
import './index.css';

function Input(props) {
  const [value, setValue] = useState(props.value || '');

  return (
    <input 
      type={props.type}
      value={value}
      onInput={(event) => setValue(event.target.value)}
    />
  )
}

export default Input;