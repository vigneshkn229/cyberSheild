import { useNavigate, Link } from "react-router-dom"
import { useState } from "react"

function Login(){

const navigate = useNavigate()

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

const handleLogin = () =>{
navigate("/dashboard")
}

return(

<div className="login-page">

<div className="login-card">

<h2 className="logo">CYBERSHIELD</h2>
<h3 className="login-title">SECURE LOGIN</h3>

<label>EMAIL</label>
<input
type="email"
placeholder="agent@cybershield.gov"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>

<label>PASSWORD</label>
<input
type="password"
placeholder="••••••••"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>

<p className="forgot">Forgot Password?</p>

<button className="login-btn" onClick={handleLogin}>
ACCESS SYSTEM
</button>

<p className="register-text">
No account? <Link to="/register">Register here</Link>
</p>

</div>

</div>

)

}

export default Login