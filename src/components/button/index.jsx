import './index.css';

function Button(props) {
  return (
    <button 
      type={props.type}
      style={props.style}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.name}
    </button>
  )
}

export default Button;