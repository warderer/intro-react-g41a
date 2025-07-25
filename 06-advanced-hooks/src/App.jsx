import { useReducer, useCallback } from 'react'
import { formReducer, initialState } from './reducers/formReducer'
import Step1 from './components/Step1'
import Step2 from './components/Step2'
import Success from './components/Success'
import './App.css'

function App () {
  const [state, dispatch] = useReducer(formReducer, initialState)

  // Funciones con useCallback para evitar recrear funciones en cada render
  const nextStep = useCallback(() => {
    dispatch({ type: 'NEXT_STEP' })
  }, [])

  const prevStep = useCallback(() => {
    dispatch({ type: 'PREV_STEP' })
  }, [])

  const handleFieldChange = useCallback((e) => {
    const { name, value } = e.target
    dispatch({ type: 'UPDATE_FIELD', payload: { field: name, value } })
  }, [])

  const reset = useCallback(() => {
    dispatch({ type: 'RESET' })
  }, [])

  // Renderizado condicional basado en el paso (step) actual
  const renderStep = () => {
    switch (state.step) {
      case 1:
        return (
          <Step1
            formData={state.formData}
            handleFieldChange={handleFieldChange}
            nextStep={nextStep}
          />
        )
      case 2:
        return (
          <Step2
            formData={state.formData}
            handleFieldChange={handleFieldChange}
            prevStep={prevStep}
            nextStep={nextStep}
          />
        )
      case 3:
        return (
          <Success
            formData={state.formData}
            reset={reset}
          />
        )
      default:
        return <div>Error: Paso desconocido</div>
    }
  }

  return (
    <div className='form-container'>
      {renderStep()}
    </div>
  )
}

export default App
