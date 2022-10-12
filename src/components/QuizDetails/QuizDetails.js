import React from 'react';
import { Container, Row, } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Questions from '../Questions/Questions';

const QuizDetails = () => {

    const quiz = useLoaderData();
    const { name} = quiz.data;
     
    return (
        <Container>
            <Row xs={1} md={1} className="mt-4 p-2 m-auto">
                <div>
                    <h3>Quiz For: {name}</h3>
                    <h5>Total Quiz:</h5>
                </div>
            </Row>
            {
                quiz.data.questions.map(quizs => <Questions
                    key={quizs.id}
                    quizs={quizs}
                    ></Questions>
                )
            }
        </Container>
    );
};

export default QuizDetails;