function Success ({ formData, reset }) {
  return (
    <div className='form-step success'>
      <h2>¡Registro Exitoso!</h2>
      <p>Gracias por registrarte. Aquí está tu información:</p>
      <div className='summary'>
        <p><strong>Nombre:</strong> {formData.name}</p>
        <p><strong>Correo Electrónico:</strong> {formData.email}</p>
      </div>
      <div className='form-navigation'>
        <button onClick={reset}>Crear un nuevo registro</button>
      </div>
    </div>
  )
}

export default Success
