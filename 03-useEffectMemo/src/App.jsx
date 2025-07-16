import { useState, useEffect, useMemo } from 'react'
import './App.css'

function App () {
  const listaDeUsuarios = [
    { id: 1, nombre: 'Abril', pais: 'México' },
    { id: 2, nombre: 'Bruno', pais: 'Brasil' },
    { id: 3, nombre: 'Carla', pais: 'Argentina' },
    { id: 4, nombre: 'Diana', pais: 'Colombia' },
    { id: 5, nombre: 'Eduardo', pais: 'Chile' },
    { id: 6, nombre: 'Fernanda', pais: 'Perú' },
    { id: 7, nombre: 'Gabriel', pais: 'Venezuela' },
    { id: 8, nombre: 'Héctor', pais: 'Ecuador' },
  ]

  // Creamos los estados para manejar usuarios, busqueda, la carga y el tema
  const [usuarios, setUsuarios] = useState([])
  const [busqueda, setBusqueda] = useState('')
  const [cargando, setCargando] = useState(true)
  const [tema, setTema] = useState('light')

  // Funcion que simule una llamada a la API
  const fetchUsuarios = () => {
    return new Promise((resolve) => {
      console.log('Cargando usuarios...')
      setTimeout(() => {
        resolve(listaDeUsuarios)
      }, 2000)
    })
  }

  // useEffect lo usamos para cargar los datos (en este caso los usuarios) al iniciar el componente
  useEffect(() => {
    fetchUsuarios()
      .then((data) => {
        setUsuarios(data)
        setCargando(false)
      })
  }, []) // El arreglo vacio significa que solo se ejecuta una vez, en la primera carga del componente

  // useMemo para optimizar la busqueda de usuarios
  const usuariosFiltrados = useMemo(() => {
    console.log('MEMO: Filtrando usuarios...')
    return usuarios.filter((usuario) =>
      usuario.nombre.toLowerCase().includes(busqueda.toLowerCase())
    )
  }, [usuarios, busqueda]) // Se ejecuta cuando usuarios o busqueda cambian

  const estilo = {
    backgroundColor: tema === 'light' ? '#fff' : '#333',
    color: tema === 'light' ? '#000' : '#fff',
    padding: '20px',
    borderRadius: '5px',
    transition: 'all 0.3s ease',
  }

  return (
    <>

    </>
  )
}

export default App
