import React, { useState } from 'react'
import smallHex from './../../../../../images/small_practice.svg'
import {Button, Modal} from "react-bootstrap"
import leftBee from './../../../../../images/left-incorrect.svg'
import rightBee from './../../../../../images/right-incorrect.svg'
import circleRed from './../../../../../images/circle_modul.svg'
import circleGreen from './../../../../../images/green-correct.svg'
import leftBeeTrue from './../../../../../images/leftBeeTrue.svg'
import rightBeeTrue from './../../../../../images/rightBeeTrue.svg'
import './Practice.css'


export default function Practice () {
    const questions = [
        {
            questionText: 'Как сказать на английском “ты”?',
            answerOptions: [
                {id: 0, answerText: 'She', isCorrect: false},
                {id: 1, answerText: 'He', isCorrect: false},
                {id: 2, answerText: 'You', isCorrect: true}
            ]
        },
        {
            questionText: 'Как сказать на английском “и”?',
            answerOptions: [
                {id: 0, answerText: 'in', isCorrect: false},
                {id: 1, answerText: 'and', isCorrect: true},
                {id: 2, answerText: 'is', isCorrect: false}
            ]
        },
        {
            questionText: 'Как сказать на английском “мама”?',
            answerOptions: [
                {id: 0, answerText: 'Father', isCorrect: false},
                {id: 1, answerText: 'Mother', isCorrect: true},
                {id: 2, answerText: 'Son', isCorrect: false}
            ]
        },
        {
            questionText: 'Как сказать на английском “она”?',
            answerOptions: [
                {id: 0, answerText: 'She', isCorrect: true},
                {id: 1, answerText: 'He', isCorrect: false},
                {id: 2, answerText: 'I', isCorrect: false}
            ]
        },
        {
            questionText: 'Как сказать на английском “яблоко”?',
            answerOptions: [
                {id: 0, answerText: 'Tree', isCorrect: false},
                {id: 1, answerText: 'Apple', isCorrect: true},
                {id: 2, answerText: 'Sun', isCorrect: false}
            ]
        },
        {
            questionText: 'Как сказать на английском “книга ”?',
            answerOptions: [
                {id: 0, answerText: 'Moon', isCorrect: false},
                {id: 1, answerText: 'Look', isCorrect: false},
                {id: 2, answerText: 'Book', isCorrect: true}
            ]
        },
        {
            questionText: 'Как сказать на английском “ручка”?',
            answerOptions: [
                {id: 0, answerText: 'a pen', isCorrect: true},
                {id: 1, answerText: 'a car', isCorrect: false},
                {id: 2, answerText: 'ice', isCorrect: false}
            ]
        },
        {
            questionText: 'Как сказать на английском “один”?',
            answerOptions: [
                {id: 0, answerText: 'Two', isCorrect: false},
                {id: 1, answerText: 'Odin', isCorrect: false},
                {id: 2, answerText: 'One', isCorrect: true}
            ]
        },
        {
            questionText: 'Как сказать на английском “кошка”?',
            answerOptions: [
                {id: 0, answerText: 'Dog', isCorrect: false},
                {id: 1, answerText: 'Cat', isCorrect: true},
                {id: 2, answerText: 'Cow', isCorrect: false}
            ]
        },
        {
            questionText: 'Как сказать на английском “воздух”?',
            answerOptions: [
                {id: 0, answerText: 'Ice', isCorrect: false},
                {id: 1, answerText: 'Hen', isCorrect: false},
                {id: 2, answerText: 'Air', isCorrect: true}
            ]
        },
    ]

    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [showScore, setShowScore] = useState(false)
    const [score, setScore] = useState(0)
    const [show, setShow] = useState(false)
    const [incorrectAnswer, setIncorrectAnswer] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    const question = useCounter(0);

    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1)
            setIncorrectAnswer(false)
        } else {
            setIncorrectAnswer(true)
        }

        const nextQuestion = currentQuestion + 1
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion)
        } else {
            setShowScore(true)
        }
    }

    const indicatorBg = (index) => {
        if (question.value > index) {
            return "#D8D8D8";
        } else if (question.value === index) {
            return "#FDD615";
        } else {
            return "#D8D8D8";
        }
    };

    function useCounter(initialState) {
        const [value, setValue] = useState(initialState);
        const reset = () => setValue(0);

        const add = () => setValue((value) => (value += 1));

        return { value, add, reset };
    }

    return (
        <div className='l-wrapper'>
            {showScore ? (
                <div className='score-section'>
                    You scored <span className='score-span'>{score}</span> out of <span className='score-span'>{questions.length}</span>
                </div>
            ) : (
                <>
                    <div className='question-section'>
                        <div className='question-count'>
                           <img src={smallHex} alt={smallHex}/> <span> + {currentQuestion + 1}</span>
                            <div className="indicator">
                                {questions.map((q, id) => {
                                    return (
                                        <span
                                            className="indicator-item"
                                            key={id}
                                            style={{
                                                backgroundColor: indicatorBg(id)
                                            }}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                        <div className='question-text'>
                            <h2>{questions[currentQuestion].questionText}</h2>
                        </div>
                        <div className="m-flex">
                            <span>Нажми стрелку вниз, чтобы услышать ответы. </span>
                            <span>Нажми на ввод, чтобы выбрать ответ.</span>
                        </div>
                    </div>
                    <div className='answer-section'>
                        {questions[currentQuestion].answerOptions.map((answerOption, i) => (
                            <div className='answer-block' key={i} onClick={() =>
                                handleAnswerOptionClick(answerOption.isCorrect)}>
                                <h3 onClick={handleShow}>{answerOption.answerText}</h3>
                            </div>
                        ))}
                    </div>
                </>
            )}

            {incorrectAnswer
                ? <Modal show={show} onHide={handleClose} className='overlay_background'>
                   <div className="overlay_card">
                       <Modal.Header >
                           <Modal.Title className='overlay_title_true'>
                               <h2>Неправильный ответ</h2>
                                <div className="overlay_p">
                                    <span>Нажми стрелку вниз, чтобы</span>
                                    <span>выбрать действие</span>
                                </div>
                           </Modal.Title>
                       </Modal.Header>
                       <Modal.Body className='incorrect-bee'>
                           <img src={leftBee}/>
                           <img src={circleRed}/>
                           <img src={rightBee}/>
                       </Modal.Body>
                       <Modal.Footer className='buttons'>
                           <Button className='btn_incorrect' variant="secondary" onClick={handleClose}>
                               Попробовать еще раз
                           </Button>
                           <Button className='btn_incorrect' variant="primary" onClick={handleClose}>
                               Следующий вопрос
                           </Button>
                       </Modal.Footer>
                   </div>
                </Modal>
                : <Modal show={show} onHide={handleClose} className='overlay_background'>
                <div className="overlay_card">
                    <Modal.Header >
                        <Modal.Title className='overlay_title_false'>
                            <h2>Правильный ответ</h2>
                            <div className="overlay_p">
                                <span>Нажми стрелку вниз, чтобы</span>
                                <span>выбрать действие</span>
                            </div>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='incorrect-bee'>
                        <img src={leftBeeTrue}/>
                        <img src={circleGreen}/>
                        <img src={rightBeeTrue}/>
                    </Modal.Body>
                    <Modal.Footer className='buttons'>
                        <Button className='btn_incorrect' variant="primary" onClick={handleClose}>
                            Следующий вопрос
                        </Button>
                    </Modal.Footer>
                </div>
            </Modal>
            }
        </div>
    );
}