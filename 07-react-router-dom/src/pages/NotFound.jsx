import { Link } from 'react-router-dom'
import image404 from '../assets/404-rick-and-morty.png'

const NotFound = () => {
  return (
    <div className='page-content'>
      <h1>404 - Página No Encontrada</h1>
      <p>La página que buscas no existe. ¡Wubba Lubba Dub Dub!</p>
      <img src={image404} alt='Rick and Morty 404' className='not-found-image' />
      <Link to='/' className='btn-back'>Volver al Inicio</Link>
    </div>
  )
}
export default NotFound
