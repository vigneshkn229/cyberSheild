import { Link } from "react-router-dom"

function Hero() {
  return (
    <div className="hero-container">

      <p className="hero-tag">
        ⚠ NATIONAL CYBERCRIME REPORTING PORTAL
      </p>

      <h1 className="hero-title">
        Report.<br/>
        <span className="highlight">Track.</span><br/>
        Resolve.
      </h1>

      <p className="hero-desc">
        A secure AI-powered platform for reporting cybercrimes,
        tracking investigations in real time and connecting with
        law enforcement agencies worldwide.
      </p>

      <div className="hero-buttons">

        <button className="btn-primary">
          FILE A REPORT
        </button>

        <Link to="/login">
          <button className="btn-outline">
            LOGIN
          </button>
        </Link>

      </div>

    </div>
  )
}

export default Hero