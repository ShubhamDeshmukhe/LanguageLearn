import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:3001/login', { email, password })
      .then((res) => {
        console.log(res)
        alert("User logged in")
        navigate("/api");
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className=' d-flex justify-content-center align-items-center'>

      <div className='bg-white p-4 col-10 col-md-6 col-lg-3' style={{ marginTop: "80px", marginBottom: "80px", borderRadius: "10px", boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px' }}>

        <h2 className='text-center'>Login</h2>

        <form onSubmit={handleSubmit}>

          <div className='mb-3'>
            <label htmlFor="" className='pb-2'><strong>Email</strong></label>
            <input type="email" name="email" id="" placeholder='Enter Email' className='form-control' onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div className='mb-3'>
            <label htmlFor="" className='pb-2'><strong>Password</strong></label>
            <input type="password" name="password" id="" placeholder='Enter Password' className='form-control' onChange={(e) => setPassword(e.target.value)} />
          </div>

          <div className="d-flex align-items-center justify-content-center">
            <button className="btn btn-primary" type="submit" >
              Register
            </button>
          </div>

        </form>
        <div className="d-flex align-items-center justify-content-center" style={{ marginTop: "5px" }}>
          <span>Not have an account</span>&nbsp;
          <Link to="/register">Register</Link>
        </div>

      </div>

    </div>
  )
}

export default Login