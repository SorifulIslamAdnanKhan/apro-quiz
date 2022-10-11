import React from 'react';
import './ErrorPage.css';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

const ErrorPage = () => {
    return (
        <Container className="mt-4 p-4">
            <div>
                <FontAwesomeIcon className="error-icon" icon={faTriangleExclamation} />
                <h2>No Valid Page Found</h2>
                <h6>There is no result that matches your current filters. Try removing some of them to get better results.
                </h6>
                <Button as={Link} to={'/'} variant="success">Back To Home</Button>
            </div>
        </Container>
    );
};

export default ErrorPage;