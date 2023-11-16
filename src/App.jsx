import './css/App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Project from './pages/Project'
import { HashRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route path='/projects/:id' element={<Project />} />
      </Routes>
      <Footer />
    </HashRouter>
  )
}

export default App
