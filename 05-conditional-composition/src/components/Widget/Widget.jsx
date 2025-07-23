import './widget.css'

const Widget = ({ title, children }) => {
  return (
    <div className='widget'>
      <h2 className='widget-title'>{title}</h2>

      <div className='widget-content'>
        {/* Aquí es donde ocurre la magia.
        Renderizamos lo que sea que nos pasen dentro al componente */}
        {children}
      </div>
    </div>
  )
}
export default Widget
