import './App.css'
function App () {
  return (
    <>
      <h1>Todo List</h1>
      <input type='text' placeholder='Escribe una tarea' />
      <button>Añadir</button>
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
