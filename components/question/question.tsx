"use client";

import { useEffect } from 'react';
import styles from './question.module.css';

const FaqToggle = () => {
    document.querySelectorAll('.Question').forEach(item => {
        item.addEventListener('click', () => {
            const faqItem = item.parentElement as HTMLElement;
            const faqAnswer = faqItem.querySelector('.Answer') as HTMLElement;
            
            // Toggle the active class
            faqItem.classList.toggle('active');

            // Toggle the max-height for the answer
            if (faqItem.classList.contains('active')) {
                faqAnswer.style.maxHeight = faqAnswer.scrollHeight + 'px';
            } else {
                faqAnswer.style.maxHeight = '0';
            }

            // Toggle the icon
            const toggleIcon = item.querySelector('.toggleIcon') as HTMLElement;
            toggleIcon.textContent = faqItem.classList.contains('active') ? '×' : '+';
        });
    });
}


// Array of questions and answers
const questions = [
    {
        question: "What is my eligibility to book a car?",
        answer: "You should be 18 years old and you must possess a valid driving licence."
    },
    {
        question: "Can I book for any period of time?",
        answer: "Yes, you can book for any available period."
    },
    {
        question: "Can I opt for a longer period?",
        answer: "Yes, you can opt for a longer period."
    },
    {
        question: "Can I book a one-way trip?",
        answer: "Yes, one-way trips are available."
    },
    {
        question: "Is there a home delivery option available?",
        answer: "Yes, home delivery is available in certain areas."
    },
    {
        question: "How can I make the payment?",
        answer: "Payments can be made online through various payment gateways."
    }
];

export default function Question() {
    return (
        <div className={styles.enquirySection}>
            <h1>Frequently Asked Questions</h1>
            <div className={styles.questionContainer}>
                {questions.map((item, index) => (
                    <div key={index} className={styles.questionAnswer}>
                        <div className={styles.Question}>
                            <h3>{item.question}</h3>
                            <span className={styles.toggleIcon} onClick={FaqToggle}>+</span>
                            
                        </div>
                        {item.answer && (
                            <div className={styles.Answer}>
                                <p>{item.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
        
    );
}
