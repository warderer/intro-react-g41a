/* 1. Importar el hook useState */
import { useState } from 'react'
import './App.css'

function App () {
  /* 2. Creo el estado donde guardare la información del input */
  const [inputValue, setInputValue] = useState('')

  /* 3. Crear una función que se ejecutará cuando haga clic en añadir */
  const handleAdd = () => {
    console.log('Añadir tarea:', inputValue)
  }

  return (
    <>
      <h1>Todo List</h1>
      {/* 4. Implementar el evento onChange para guardar la información del estado, apenas esta sea tecleada */}
      <input
        type='text'
        placeholder='Escribe una tarea'
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button onClick={handleAdd}>Añadir</button>
      {/* ul>li{Item $}*3>button{Borrar} */}
      <ul>
        <li>Item 1<button>Borrar</button></li>
        <li>Item 2<button>Borrar</button></li>
        <li>Item 3<button>Borrar</button></li>
      </ul>
    </>
  )
}

export default App
