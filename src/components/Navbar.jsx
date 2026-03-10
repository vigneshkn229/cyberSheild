import {Link} from "react-router-dom"
import {Shield} from "lucide-react"

function Navbar(){
  return(
    <nav className="navbar">

      <div className="logo">
        <Shield size={22}/>
        CYBERSHIELD
      </div>

      <div>
        <Link to="/login" className="btn-outline">Login</Link>
        <Link to="/register" className="btn-primary">Get Started</Link>
      </div>

    </nav>
  )
}

export default Navbar