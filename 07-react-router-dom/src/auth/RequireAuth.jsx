import { Navigate } from 'react-router-dom'

const RequireAuth = ({ isAuth, children }) => {
  return isAuth ? children : <Navigate to='/' replace />
}
export default RequireAuth
