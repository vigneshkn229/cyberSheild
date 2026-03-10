import {BrowserRouter,Routes,Route} from "react-router-dom"

import Hero from "./components/Hero"
import Login from "./components/Login"
import Register from "./components/Register"
import Dashboard from "./components/Dashboard"

function App(){

return(

<BrowserRouter>

<Routes>

<Route path="/" element={<Hero/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/register" element={<Register/>}/>
<Route path="/dashboard" element={<Dashboard/>}/>

</Routes>

</BrowserRouter>

)

}

export default App