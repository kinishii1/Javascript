import './Card.css'
import stars from '../../assets/Star 1.png'

export default function Card(props) {
  return (
    <div className="card">
      <img src={`./${props.img}.png`} alt="" />
      <div className="stars">
        <img className='star' src={stars} alt="" />
        <span>{props.grade}</span>
        <span>(6) • {props.location}</span>
      </div>
      <p className='desc'>{props.desc}
      </p>
      <p className="price">
        <span>From ${props.price} /</span> person
      </p>
    </div>
  )
}

// {"./logo.jpeg"}