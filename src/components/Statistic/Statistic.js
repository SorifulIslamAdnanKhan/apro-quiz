import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import ChartData from '../ChartData/ChartData';

const Statistic = () => {
    const statistic = useLoaderData();

    return (
        <Container>
            <Row className="mt-4">
                {
                    <ChartData
                        chartData={statistic.data}
                    ></ChartData>
                }
            </Row>
        </Container>
    );
};

export default Statistic;