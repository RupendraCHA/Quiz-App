// src/components/QuestionNavigator.js
import React, { useState, useEffect } from 'react';
import { questions } from '../data';
import QuestionDisplay from './QuestionDisplay.jsx';

const QuestionNavigator = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answerResult, setAnswerResult] = useState(null);

    useEffect(() => {
        // Read the URL parameters to set the initial question index
        const urlParams = new URLSearchParams(window.location.search);
        const questionIndex = urlParams.get('questionIndex');

        if (questionIndex) {
            setCurrentQuestionIndex(parseInt(questionIndex, 10));
        }
    }, []);

    const handleOptionClick = (selectedOption) => {
        const currentQuestion = questions[currentQuestionIndex];
        const isCorrect = selectedOption === currentQuestion.correctAnswer;

        setAnswerResult({
            answer: selectedOption,
            correct: isCorrect,
        });

        // Move to the next question
        setCurrentQuestionIndex((prevIndex) => (prevIndex + 1) % questions.length);
    };

    const currentQuestion = questions[currentQuestionIndex];

    return (
        <div>
            {answerResult && (
                <div style={{ textAlign: 'center', marginTop: '20px', color: "blue" }}>
                    <h3>
                        You selected: {answerResult.answer}. This answer is{' '}
                        {answerResult.correct ? 'correct!' : 'wrong!'}
                    </h3>
                </div>
            )}
            <QuestionDisplay
                question={currentQuestion.question}
                options={currentQuestion.options}
                currentQuestionIndex={currentQuestionIndex} // Pass the index to the display
                onOptionClick={handleOptionClick}
            />
        </div>
    );
};

export default QuestionNavigator;
