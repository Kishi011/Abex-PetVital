import './index.css';

function Card(props) {
  return (
    <section>
      { props.children }
    </section>
  )
}

export default Card;