import './index.css';

function Button(props) {
  return (
    <button 
      type={props.type}
      onClick={props.onClick}
      style={props.style}
    >
      {props.name}
    </button>
  )
}

export default Button;