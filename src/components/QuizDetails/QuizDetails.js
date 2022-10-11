import React from 'react';
import { Container, Row, Card } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

const QuizDetails = () => {
    const quiz = useLoaderData();
    console.log(quiz.data.questions);
    return (
        <Container>
            <Row xs={1} md={1} className="mt-4 p-2 m-auto">
                <div>
                    <h3>Quiz For: {quiz.data.name}</h3>
                    <h5>Total Quiz:</h5>
                </div>
            </Row>
                {
                quiz.data.questions.map(qus =>
                <Row xs={1} md={1} className="mt-4 p-4 g-4 bg-secondary">
                    
                        <div className="bg-secondary">
                            <div>
                                <FontAwesomeIcon className="eye-icon" icon={faEye} />
                            </div>
                            <br />
                            <div className="text-white">
                                <h4>{qus.question}</h4>
                                <h4>{qus.correctAnswer}</h4>
                                <br />
                                {
                                    qus.options.map(option =>
                                        <Row>
                                            <div className="col-md-6">
                                                <input type="radio" name="quiz" />
                                            </div>
                                            <div className="col-md-6">
                                                <p>{option} </p>
                                            </div>
                                            
                                        </Row>
                                    )
                                }
                            </div>
                            <br />
                        </div>
                    </Row>
                    )
                }
            
        </Container>
    );
};

export default QuizDetails;