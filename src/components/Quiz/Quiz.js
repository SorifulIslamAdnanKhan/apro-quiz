import React from 'react';
import {Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Quiz = ({ quiz }) => {

    const { name, logo, total, id } = quiz;

    const navigate = useNavigate();

    const handleQuiz = () =>{
        navigate(`/quiz/${id}`);
    }

    return (

        <div>
            <Card className="bg-dark">
                <Card.Img variant="top" src={logo} />
                <Card.Body className="text-white">
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>Total Quizzes: <b>{total}</b></Card.Text>
                    <Button onClick={handleQuiz}>Quiz Details</Button>
                </Card.Body>
            </Card>
        </div>

    );
};

export default Quiz;