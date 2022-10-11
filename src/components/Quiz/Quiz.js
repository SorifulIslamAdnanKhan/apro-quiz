import React from 'react';
import {Card, Button } from 'react-bootstrap';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';

const Quiz = ({ quiz }) => {
    //console.log(quiz);
    const { name, logo, total, id } = quiz;


    return (

        <div>
            <Card className="bg-dark">
                <Card.Img variant="top" src={logo} />
                <Card.Body className="text-white">
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>Total Quizzes: <b>{total}</b></Card.Text>
                    <Link to={`/quiz/${id}`}>Quiz Details</Link>
                </Card.Body>
            </Card>
        </div>

    );
};

export default Quiz;