import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header>
      <nav id="nav-bar">
        <div>
          <Link to="/"><h3 className="on-click">Ryan Gudsell</h3></Link>
          <Link to="/"><span className="on-click">Web Developer</span></Link>
        </div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
