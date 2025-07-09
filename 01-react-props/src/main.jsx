import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App saludo="Hola" title="G41A, soy un Prop"/>
    <App saludo="Hi" title="This is another component with different info"/>
  </StrictMode>,
)
