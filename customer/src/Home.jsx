import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
    const username = localStorage.getItem('userid');
    console.log(username);
  return (
    
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>User Details</h2>
                <h3>ID : {username}</h3>
                <Link to="/" ><button className="btn btn-default border w-100 bg-light rounded-3 text-decoration-none">Logout</button></Link>
                
                    

            </div>
        </div>
  )
}

export default Home
