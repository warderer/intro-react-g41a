import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/characters'>Personajes</NavLink>
        </li>
      </ul>
    </nav>
  )
}
export default Navbar
