import React from 'react';
import image from "../assets/image.avif"
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div className='d-flex flex-wrap justify-content-center align-items-center' style={{ height: "91.5vh", background: "#f8f9fa"  }}>

                <div><img src={image} style={{ maxWidth: "100%", height: "auto" }} alt="" /></div>

                <div className='text-center'style={{marginLeft:"20px",marginRight:"20px"}}>
                    <h3>"Empower Your Communication, Empower Your World."</h3>
                    <h5 style={{margin:"20px"}}>Start Learning Now</h5>
                    <Link type="button" className='btn btn-primary'to="/register">Sign Up for Free</Link>
                </div>
            </div>
        </div>
    )
}

export default Home