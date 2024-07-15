import twitterIcon from '../assets/Twitter Icon.png'
import facebookIcon from '../assets/Facebook Icon.png'
import instagramIcon from '../assets/Instagram Icon.png'
import githubIcon from '../assets/GitHub Icon.png'
import './CardFooter.css'

export default function CardFooter() {
  return (
    <div className="card-footer">
      <img src={twitterIcon} alt="" />
      <img src={facebookIcon} alt="" />
      <img src={instagramIcon} alt="" />
      <img src={githubIcon} alt="" />
    </div>
  )
}