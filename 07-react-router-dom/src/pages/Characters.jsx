import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Characters = () => {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch('https://rickandmortyapi.com/api/character')
        const data = await response.json()
        setCharacters(data.results)
      } catch (error) {
        console.error('Error al obtener los personajes:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchCharacters()
  }, [])

  if (loading) return <p>Cargando personajes...</p>

  return (
    <div>
      <h1>Personajes de Rick and Morty</h1>
      <div className='characters-grid'>
        {characters.map((character) => (
          <Link to={`/characters/${character.id}`} key={character.id} className='character-card'>
            <img src={character.image} alt={character.name} />
            <h3>{character.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Characters
