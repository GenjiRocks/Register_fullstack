import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function Login(){
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()
    // const [error, setError] = useState();

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/login',{email, password})
        .then(result => {
            console.log(result)
            if(result.data === "Success"){
                localStorage.setItem('userid', email);
                
                navigate('/home')
            }
            // else{
            //     setError(result.data)
            // }
            
        })
        .catch(err=>console.log(err))
    }

    return(
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>Login</h2>
                {/* {error && <div className="alert alert-danger">{error}</div>} */}
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlForfor="email">
                            <strong>User ID</strong>
                        </label>
                        <input 
                        type="text"
                        placeholder="Enter User ID"
                        autoComplete="off"
                        name="email"
                        className="form-control rounded-3"
                        onChange={(e)=> setEmail(e.target.value)}
                         /> 
                          </div>
                    <div className="mb-3">
                        <label htmlForfor="email">
                            <strong>Password</strong>
                        </label>
                        <input 
                        type="password"
                        placeholder="Enter Password"
                        name="password"
                        className="form-control rounded-3"
                        onChange={(e)=> setPassword(e.target.value)}

                         />   
                         </div>
                    <button type="submit" className="btn btn-success w-100 rounded-3">
                        Login
                    </button>
                    </form>
                    <p>Already have an Account</p>
                    <Link to="/" className="btn btn-default border w-100 bg-light rounded-3 text-decoration-none">Sign up</Link>
                

            </div>
        </div>

    )
}

export default Login;