import { NavLink } from 'react-router-dom'

const Navbar = ({ isAuth, onLogin, onLogout }) => {
  return (
    <nav className='navbar'>
      <ul>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/characters'>Personajes</NavLink>
        </li>
        {isAuth && (
          <li>
            <NavLink to='/secret'>Secreto</NavLink>
          </li>
        )}
      </ul>

      <div className='auth-buttons'>
        {isAuth
          ? (
            <button onClick={onLogout} className='btn btn-link'>Logout</button>
            )
          : (
            <button onClick={onLogin} className='btn btn-link'>Login</button>
            )}
      </div>
    </nav>
  )
}
export default Navbar
