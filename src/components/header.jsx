import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="bg-black">
      <div className="container mx-auto flex items-center justify-between">
        <nav className="flex gap-4">
          <img src="assets/Logo.png" className="w-[90px] h-[90px]" alt="" />
          <ul className="flex items-center gap-6">
            <li className="nav-link">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="nav-link">
              <Link to={"/about"}>About Us</Link>
            </li>
            <li className="nav-link">
              <Link to={"/services"}>Services</Link>
            </li>
            <li className="nav-link">
              <Link to={"/portfolio"}>Portfolio</Link>
            </li>
            <li className="nav-link">
              <Link to={"/pricing"}>Pricing</Link>
            </li>
            <li className="nav-link">
              <Link to={"/testimonials"}>Testimonials</Link>
            </li>
            <li className="nav-link">
              <Link to={"/contact"}>Contact Us</Link>
            </li>
          </ul>
        </nav>
        <nav className="flex items-center gap-5">
          <button className="btn-style w-[150px]">
            <Link to={"/register"}>Register</Link>
          </button>
          <button className="btn-style w-[150px]">
            <Link to={"/login"}>Login</Link>
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header