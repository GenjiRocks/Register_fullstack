import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

import bcrypt from 'bcryptjs';

const salt = 10;


function Signup(){
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        const hashedPassword = await bcrypt.hash(password,salt)
        axios.post('http://localhost:3001/register',{email, password: hashedPassword})
        .then(result => {console.log(result)
            navigate('/login')
        })
        .catch(err=>console.log(err))
    }

    return(
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>Register</h2>
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
                        Register
                    </button>
                    </form>
                    <p>Already have an Account</p>
                    <Link to="/login" className="btn btn-default border w-100 bg-light rounded-3 text-decoration-none">Login</Link>
                

            </div>
        </div>


    );
}

export default Signup;