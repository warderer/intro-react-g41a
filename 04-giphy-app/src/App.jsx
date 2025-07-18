import { useState, useEffect } from 'react'
import ImageCard from './components/ImageCard'
import './App.css'
import SearchBar from './components/SearchBar'

function App () {
  const [gifs, setGifs] = useState([])
  const APIKEY = import.meta.env.VITE_GIPHY_API_KEY

  useEffect(() => {
    const fetchGifs = async () => {
      try {
        const response = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${APIKEY}&limit=12&offset=0&rating=g&bundle=messaging_non_clips`)
        const results = await response.json()
        setGifs(results.data)
      } catch (error) {
        console.error('Error fetching GIFs:', error)
      }
    }

    fetchGifs()
  }, [])

  const sendSearch = async (searchWord) => {
    try {
      const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&q=${searchWord}&limit=12&offset=0&rating=g&lang=es&bundle=messaging_non_clips`)
      const results = await response.json()
      setGifs(results.data)
    } catch (error) {
      console.error('Error fetching GIFs:', error)
    }
  }

  return (
    <>
      <div className='App'>
        <SearchBar handleSearch={sendSearch} />
        <div className='grid-cards'>
          {gifs.map(gif => (
            <ImageCard
              key={gif.id}
              url={gif.images.fixed_height.url}
              title={gif.title}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default App
