import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Characters from '../pages/Characters'
import CharacterDetail from '../pages/CharacterDetail'
import NotFound from '../pages/NotFound'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/characters' element={<Characters />} />
      <Route path='/characters/:id' element={<CharacterDetail />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}
export default AppRoutes
