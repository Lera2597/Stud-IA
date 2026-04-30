import { useState } from "react"
import client from "../api/client"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"
import { useContext } from "react"

const Login = () => {
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
    const navigate = useNavigate()
    const {login} = useContext(AuthContext)

    const hadleLogin = async (e) => {
        e.preventDefault()
        try {
            const response = await client.post('/auth/login' , {email , password})
            // console.log(response.data)
            const token = response.data.token

            //localStorage.setItem('token' , token)
            login(token)

            navigate('/dashboard')
            
            alert('Login Success')
        } catch (error) {
            alert('Login Failed', error)
            // console.log(error)
        }
    }
    return (
        <div className="container vh-100 d-flex align-items-center justify-content-center">
            <div className="card card-custom p-4" style={{width: '400px'}}>
                <h3 className="text-center mb-4">Login</h3>

                <form onSubmit={hadleLogin}>
                    <div className="mb-3">
                        <label htmlFor="email">Email</label>   
                        <input 
                            type="email" 
                            className="form-control" 
                            id="email" 
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password">Password</label>   
                        <input 
                            type="password" 
                            className="form-control" 
                            id="password" 
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                    </div>

                    <button type="submit" className="btn btn-primary w-100">Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login