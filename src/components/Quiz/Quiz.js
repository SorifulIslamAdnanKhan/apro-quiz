import React from 'react';
import {Card, Button } from 'react-bootstrap';

const Quiz = ({ quiz }) => {
    const { name, logo, total } = quiz;
    return (

        <div>
            <Card className="bg-dark">
                <Card.Img variant="top" src={logo} />
                <Card.Body className="text-white">
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>Total Quizzes: <b>{total}</b></Card.Text>
                    <Button>Quiz Details</Button>
                </Card.Body>
            </Card>
        </div>

    );
};

export default Quiz;