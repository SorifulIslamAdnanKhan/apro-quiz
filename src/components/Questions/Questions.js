import React from 'react';
import { Row, Card } from 'react-bootstrap';
import { toast, ToastContainer } from "react-toastify";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

const Questions = ({ quizzes, index }) => {
    //console.log(quizzes);
    const { question, correctAnswer } = quizzes;

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
        <Row xs={1} md={1} className="mt-4 p-4 g-4 bg-secondary">
            <ToastContainer></ToastContainer>
            <div className="bg-secondary">
                <div>
                    <FontAwesomeIcon onClick={handleCorrectAns} className="eye-icon" icon={faEye} />
                </div>
                <br />
                <div className="text-white">
                    <h4><b>{index+1}</b>{question}</h4>
                    <br />
                    <Row xs={1} md={2} className="g-4 mt-4">
                        {
                            quizzes.options.map(option =>

                                <div>
                                    <Card className="bg-dark">
                                        <Card.Body className="text-white">
                                            <Card.Text>
                                                <label htmlFor="">
                                                    <input onClick={() => handleAns(option)} type="radio" name="quiz" />
                                                </label>
                                            </Card.Text>
                                            <Card.Text>
                                                <p>{option} </p>
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