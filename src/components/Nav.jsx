import './Nav.css'
import { Link } from 'react-router-dom'
import { TbCheckupList } from "react-icons/tb";
export const Header = () => {
  return (
    <header>
      <h1><Link to='/'><TbCheckupList className='Todolist-icon' /></Link></h1>
      <ul>
        <li><Link to='/login'>Iniciar sesión</Link></li>
      </ul>
    </header>
  )
}