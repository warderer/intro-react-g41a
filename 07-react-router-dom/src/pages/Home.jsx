import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='page-content'>
      <h1>Aprendiendo React Router</h1>
      <p>
        Esta es una aplicación de demostración que utiliza la API de Rick and Morty para ilustrar las funcionalidades de <code>react-router-dom</code>.
      </p>
      <p>
        Navega a la sección de personajes para comenzar.
      </p>
      <Link to='/characters' className='btn-back'>Ver Personajes</Link>
    </div>
  )
}
export default Home
