const Info = ({ title, desc }) => {
  return (
    <section className="info">
        <div className="contenedor">
            <h2 className="titulo left">{title}</h2>
            <p>{desc}</p>
        </div>
    </section>
  )
}
export default Info