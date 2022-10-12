import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Hero from '../Hero/Hero';
import Quiz from '../Quiz/Quiz';

const Home = () => {
    const quizzes = useLoaderData();
    return (
        <div>
            <Hero></Hero>
            <Container>
                <Row xs={1} md={2} className="g-4 mt-4">
                    {
                        quizzes.data.map(quiz => <Quiz
                            key={quiz.id}
                            quiz={quiz}
                        ></Quiz>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Home;