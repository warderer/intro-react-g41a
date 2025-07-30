import { useState, useEffect } from 'react'

const CharacterDetail = () => {
  const id = 1 // TODO: Hacer dinámico por medio de useParams
  // TODO: Hacer uso del hook useNavigate

  const [character, setCharacter] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
        const data = await response.json()
        setCharacter(data)
      } catch (error) {
        console.error('Error al obtener el detalle del personaje:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchCharacter()
  }, [id])

  // TODO: Declarar función para regresar de manera programatica

  if (loading) return <p>Cargando detalle...</p>
  if (!character) return <p>Personaje no encontrado.</p>

  return (
    <div className='character-detail'>
      <img src={character.image} alt={character.name} />
      <div className='character-detail-info'>
        <h2>{character.name}</h2>
        <p><strong>Estado:</strong> {character.status}</p>
        <p><strong>Especie:</strong> {character.species}</p>
        <p><strong>Género:</strong> {character.gender}</p>
        <p><strong>Origen:</strong> {character.origin.name}</p>
      </div>
      {/* TODO: Implementar botón de manera programatica con useNavigate */}
    </div>
  )
}

export default CharacterDetail
