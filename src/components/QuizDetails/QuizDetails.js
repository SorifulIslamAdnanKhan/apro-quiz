import React from 'react';
import { useLoaderData } from 'react-router-dom';

const QuizDetails = () => {
    const quiz = useLoaderData();
    console.log(quiz.data.questions);
    return (
        <div>
            <h3>Quiz Details</h3>
        </div>
    );
};

export default QuizDetails;