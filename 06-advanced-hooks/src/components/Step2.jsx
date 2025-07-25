// TODO: Importar useRef de React
import { useEffect } from 'react'

function Step2 ({ formData, handleFieldChange, prevStep, nextStep }) {
  // TODO: Llamar a inputRef

  useEffect(() => {
    // TODO: Enfoca el primer campo de entrada (passwordInputRef) cuando el componente se monta
  }, [])

  const canProceed = formData.password.length >= 8

  return (
    <div className='form-step'>
      <h2>Paso 2: Seguridad</h2>
      <div className='form-group'>
        <label htmlFor='password'>Contraseña</label>
        <input
          type='password'
          id='password'
          name='password'
          ref='ASIGNAMOS LA REFERENCIA AQUI'
          value={formData.password}
          onChange={handleFieldChange}
          placeholder='Mínimo 8 caracteres'
        />
        {!canProceed && formData.password && (
          <small>La contraseña debe tener al menos 8 caracteres.</small>
        )}
      </div>
      <div className='form-navigation'>
        <button onClick={prevStep} className='secondary'>
          Anterior
        </button>
        <button onClick={nextStep} disabled={!canProceed}>
          Finalizar Registro
        </button>
      </div>
    </div>
  )
}

export default Step2
