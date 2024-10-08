import React from 'react';
import QRCode from 'react-qr-code';

const QuestionDisplay = ({ question, options, currentQuestionIndex, onOptionClick }) => {
    // Create a QR code value that includes the current question index
    const qrValue = `https://quizapp1r.onrender.com/?questionIndex=${currentQuestionIndex}`; // Change to your deployed URL

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h2>Question: {question}</h2>
            <QRCode value={qrValue} size={200} />
            <div style={{ marginTop: '20px' }}>
                {options.map((option, index) => (
                    <button
                        key={index}
                        onClick={() => onOptionClick(option)}
                        style={{ display: 'block', margin: '10px auto', padding: '10px 20px' }}
                    >
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default QuestionDisplay;

