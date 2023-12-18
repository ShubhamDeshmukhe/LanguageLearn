import React, { useState, useEffect } from 'react';

const Question = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {

    // Fetch questions from your backend API
    const fetchQuestions = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/question');
        const data = await response.json();
        setQuestions(data);
      } catch (error) {
        console.error('Error fetching questions:', error.message);
      }
    };

    fetchQuestions();
  }, []);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleAnswerClick = () => {
    const correctOption = questions[currentQuestion].correctOption;

    if (selectedOption === correctOption) {
      setScore(score + 1);
    }

    // Move to the next question
    setCurrentQuestion(currentQuestion + 1);
    setSelectedOption(null);
  };

  const handleRestartClick = () => {
    // Reset the quiz state
    setCurrentQuestion(0);
    setScore(0);
    setSelectedOption(null);
  };

  return (
    <div className="" style={{ marginTop: "50px" }}>
      {currentQuestion < questions.length ? (
        <div className="question col-sm-12 col-4 col-md-9 justift-content-center align-items-center m-auto" style={{ width: "80%" }}>
          <h4>{questions[currentQuestion].question}</h4>
          <ul className='my-3'>
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className={selectedOption === option ? 'selected' : ''} style={{ display: "block", margin: "20px" }}
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </button>

            ))}
            <br />
          </ul>
          <button className='btn btn-primary my-2' onClick={handleAnswerClick}>Next</button>
        </div>
      ) : (
        <div className="quiz-completed text-center" style={{ margin: "auto", width: "90%" }}>
          {questions.length > 0 ? (
            <>
              <h2>Quiz Completed!</h2>
              <br />
              <h5>Your Score: {score}</h5>
              <br />
              <button onClick={handleRestartClick} className='my-4'>Restart Quiz</button>
            </>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Question;

