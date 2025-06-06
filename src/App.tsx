import './App.scss'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router'
import { Home, Redirect, NotFound } from './pages'
import { AppBar } from './components'

function App() {
  return (
    <>
      <header>
        <AppBar />
      </header>
      <main>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/:id' element={<Redirect />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </main>
    </>
  )
}

export default App
