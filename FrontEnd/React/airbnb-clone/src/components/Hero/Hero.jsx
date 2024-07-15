import bgImg from '../../assets/Group 77.png'
import './Hero.css'

export default function Hero () {
  return (
    <div className="hero">
      <img src={bgImg} alt="" />
      <h1 className='hero-title'>Online Experiences</h1>
      <h3 className='hero-desc'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
</h3>
    </div>
  )
}