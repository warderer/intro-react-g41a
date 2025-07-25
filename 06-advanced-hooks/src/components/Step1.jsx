import { useEffect, useRef } from 'react'

function Step1 ({ formData, handleFieldChange, nextStep }) {
  const nameInputRef = useRef(null)

  useEffect(() => {
    nameInputRef.current.focus()
  }, [])

  const canProceed = formData.name && formData.email

  return (
    <div className='form-step'>
      <h2>Paso 1: Información Personal</h2>
      <div className='form-group'>
        <label htmlFor='name'>Nombre</label>
        <input
          type='text'
          id='name'
          name='name'
          ref={nameInputRef}
          value={formData.name}
          onChange={handleFieldChange}
          placeholder='Ej: César Guerra'
        />
      </div>
      <div className='form-group'>
        <label htmlFor='email'>Correo Electrónico</label>
        <input
          type='email'
          id='email'
          name='email'
          value={formData.email}
          onChange={handleFieldChange}
          placeholder='Ej: cesar.guerra@correo.com'
        />
      </div>
      <div className='form-navigation'>
        <button onClick={nextStep} disabled={!canProceed}>
          Siguiente
        </button>
      </div>
    </div>
  )
}

export default Step1
