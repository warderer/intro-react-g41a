import { useState, useEffect } from 'react'
import './App.css'

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

  return (
    <>
      <h1>Giphy App</h1>
    </>
  )
}

export default App
