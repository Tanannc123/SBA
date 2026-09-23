import { Routes, Route } from 'react-router-dom'
import AppNavbar from './components/AppNavbar'
import AppFooter from './components/AppFooter'
import Home from './pages/Home'
import EventsPage from './pages/EventsPage'
import EventDetail from './pages/EventDetail'
import About from './pages/About'
import NotFound from './pages/NotFound'
import './App.css'

function App() {
  return (
    <>
      <AppNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/events/:id" element={<EventDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <AppFooter />
    </>
  )
}

export default App
