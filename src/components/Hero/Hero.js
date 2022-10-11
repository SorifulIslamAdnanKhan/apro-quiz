import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
//import heroImage from '../../image/hero-image.jpg';
import './Hero.css';

const Hero = () => {
    return (
        <section className='bg-light'>
            <Container>
                <Row className="p-4">
                    <Col sm={12} className="text-white">
                        <h1>Welcome To APro Quiz!</h1>
                        <h4>Answers quizzes to improve your programming knowledge with us.</h4>
                    </Col>
                </Row>
            </Container>
        </section>
        
    );
};

export default Hero;