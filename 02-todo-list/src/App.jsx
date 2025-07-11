/* 1. Importar el hook useState */
import { useState } from 'react'
import ToDoItem from './components/ToDoItem'
import './App.css'

function App () {
  /* 2. Creo el estado donde guardare la información del input */
  const [inputValue, setInputValue] = useState('')

  /* 5. Crear un nuevo estado para manejar la lista de tareas */
  const [tasks, setTasks] = useState([])

  /* 3. Crear una función que se ejecutará cuando haga clic en añadir */
  /* 6. Modificar la función para agregar tareas al estado tasks */
  const handleAdd = () => {
    // console.log('Añadir tarea:', inputValue)
    setTasks([...tasks, inputValue])
    setInputValue('') // Limpiar el input después de añadir la tarea
  }

  /* 7. Crear función para borrar una tarea */
  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index)
    setTasks(newTasks)
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
        {
          tasks.map((task, index) => (
            <ToDoItem
              key={index}
              todoName={task}
              handleDelete={() => deleteTask(index)}
            />
          ))
        }
      </ul>
    </>
  )
}

export default App
