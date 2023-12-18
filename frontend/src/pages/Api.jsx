import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const Api = () => {

    const [data, setData] = useState()
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:3001/api");
                console.log('API Response:', response);

                if (response.data && response.data.length > 0) {
                    const userName = response.data[0].name;
                    setData(userName);

                } else {
                    console.error('error');
                }
            } catch (error) {
                console.error('Error fetching data:', error.message);
            }
        };
        fetchData();
    }, [])

    const startLearning = () => {
        // Use the navigate function to redirect to the /question route
        navigate('/question');
    };

    return (
        <div>
            <div className='text-center col-9 col-md-8 col-sm-12' style={{margin:"auto",marginTop:"40px"}}>
                <span className="inline-block">
                    <h2 className='in' style={{marginTop:"30px",marginBottom:"30px"}}>Welcome, <small style={{fontSize:'20px'}}>{data}</small></h2>
                </span>

                <h5>🌎 Explore the World Through Language!</h5>
                <p style={{width:"90%",margin:"auto",marginTop:"30px",marginBottom:"30px"}}>Greetings, language enthusiasts! Welcome to Quizee, your go-to platform for an interactive and engaging language learning experience. Whether you're a beginner or an advanced learner, Quizee is designed to help you enhance your language skills in a fun and effective way.</p>


                <h5 style={{margin:"15px"}}>Getting Started:</h5>
                <p>Quizee aims to test and improve your language skills, covering vocabulary, grammar, pronunciation, and more.</p>

                <h5 style={{margin:"15px"}}>Learning Made Fun:</h5>
                <p>Remember, learning a language is an exciting journey! Embrace the process, learn from your mistakes, and enjoy every quiz.</p>

                <button className='btn btn-danger' onClick={startLearning} style={{marginBottom:"15px"}}>Start Learning Now</button>
                 <br />
                <b>Now, let's embark on a linguistic adventure with Quizee! Best of luck and enjoy the journey!</b>
            </div>
        </div>
    )
}

export default Api

 