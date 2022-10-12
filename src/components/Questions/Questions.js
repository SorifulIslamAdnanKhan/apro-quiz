import React from 'react';
import { Row, Card } from 'react-bootstrap';
import { toast, ToastContainer } from "react-toastify";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

const Questions = ({ quizzes, index, totalCorrectAnswers }) => {

    console.log(totalCorrectAnswers);
    
    const { question, correctAnswer, id } = quizzes;

    const handleAns = (option) => {
        if (option === correctAnswer) {
            toast.success('Answer is correct!')
        }
        else {
            toast.error('This is not a valid answer!')
        }
    }

    const handleCorrectAns = () =>{
        toast.success(`${correctAnswer}`);
        
    }

    return (
        <Row xs={1} md={1} className="mt-2 p-4 g-4 bg-secondary">
            <ToastContainer></ToastContainer>
            <div className="bg-secondary">
                <div>
                    <FontAwesomeIcon onClick={handleCorrectAns} className="eye-icon" icon={faEye} />
                </div>
                <br />
                <div className="text-white">
                    <h4><b>{index+1}</b>{question}</h4>
                    <Row xs={1} md={2} className="g-4 mt-2">
                        {
                            quizzes.options.map(option =>
                                <div>
                                    <Card className="bg-dark">
                                        <Card.Body className="text-white">
                                            <Card.Text>
                                                <input onClick={() => handleAns(option)} type="radio" name={id}/>
                                                
                                            </Card.Text>
                                            <Card.Text>
                                                <p>{option}</p>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            )
                        }
                    </Row>
                </div>
            </div>
        </Row>
    );
};

export default Questions;