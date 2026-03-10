import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Register() {
  const navigate = useNavigate()

  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [phone,setPhone] = useState("")
  const [password,setPassword] = useState("")
  const [confirm,setConfirm] = useState("")

  const handleRegister = () => {
    if(password !== confirm){
      alert("Passwords do not match")
      return
    }

    // after register go to login
    navigate("/login")
  }

  return (
    <div className="register-page">

      <div className="register-card">

        <h2 className="logo">CYBERSHIELD</h2>
        <h3 className="title">CREATE ACCOUNT</h3>

        <label>FULL NAME</label>
        <input
          type="text"
          placeholder="John Doe"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />

        <label>EMAIL</label>
        <input
          type="email"
          placeholder="agent@cybershield.gov"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <label>PHONE</label>
        <input
          type="text"
          placeholder="+1 (555) 000-0000"
          value={phone}
          onChange={(e)=>setPhone(e.target.value)}
        />

        <label>PASSWORD</label>
        <input
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />

        <label>CONFIRM PASSWORD</label>
        <input
          type="password"
          placeholder="••••••••"
          value={confirm}
          onChange={(e)=>setConfirm(e.target.value)}
        />

        <button className="register-btn" onClick={handleRegister}>
          REGISTER
        </button>

      </div>

    </div>
  )
}

export default Register