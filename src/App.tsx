import './App.scss'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router'
import { Home, RedirectPage, NotFound } from './pages'

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:id' element={<RedirectPage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
