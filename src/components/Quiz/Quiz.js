import React from 'react';
import {Card, Button, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Quiz.css';

const Quiz = ({ quiz }) => {

    const { name, logo, total, id } = quiz;

    const navigate = useNavigate();

    const handleQuiz = () =>{
        navigate(`/quiz/${id}`);
    }

    return (

        <div>
            <Card className="bg-dark">
                <Row md={2}>
                    <div>
                        <Card.Img variant="top" src={logo} />
                    </div>
                    <div className="text-white card-body">    
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Text>Total Quizzes: <b>{total}</b></Card.Text>
                            <Button onClick={handleQuiz}>Quiz Details</Button>
                        </Card.Body>
                    </div>
                    
                </Row>
            </Card>
        </div>

    );
};

export default Quiz;