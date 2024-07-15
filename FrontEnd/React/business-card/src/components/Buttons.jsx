import emailIcon from '../assets/Mail.png'
import linkedinIcon from '../assets/linkedin.png'
import './Buttons.css'

export default function Buttons() {
  return (
    <div className="buttons">
      <button className='email-button'><img src={emailIcon} />Email</button>
      <button className='linkedin-button'><img src={linkedinIcon} />LinkedIn</button>
    </div>
  )
}