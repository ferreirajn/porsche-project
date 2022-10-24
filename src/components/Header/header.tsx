import { Link } from 'react-router-dom';
import logo from '../../assets/images/porsche-logo.png';
import './header.scss'


function Header() {
  return (
    <header>
    <Link to='/' className='logo' aria-label='Logo' >
      <img src={logo} alt='logo da porsche' />
    </Link>

    <nav className='menu'>
      <ul>
       <li> <Link to='/'>Home </Link> </li>
       <li> <Link to='/models'>Models</Link>  </li>
       <li> <Link to='/discover'>Descubra</Link>  </li>
      </ul>
    </nav>
  </header>
  )
}

export default Header