const ToDoItem = ({ todoName, handleDelete }) => {
  return (
    <li>
      {todoName}
      <button
        className='delete-button'
        onClick={handleDelete}
      >
        Borrar
      </button>
    </li>
  )
}
export default ToDoItem
