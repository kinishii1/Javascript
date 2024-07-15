import logo from '../../assets/airbnb1.png'
import './Header.css'

export default function Header () {
  return (
    <header>
    <img className='logo' src={logo}/> 
    </header>
  )
}