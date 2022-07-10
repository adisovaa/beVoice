import React, {useState} from 'react'
import RainBG from '../../../../images/sound_bg.png'
import CityBG from '../../../../images/City_bg.png'
import smallHex from "../../../../images/small_practice.svg";
import citySound from "../../../Assets/sounds/city-traffic.mp3";
import './QuizGame.css'

const Quiz = () => {
    const sounds = [
        {
            answerOptions: [
                {id: 0, background: RainBG, audio: 'https://moritzgiessmann.de/birdwindandfire/audio/rain-loop.flac'},
                {id: 1, answerText: 'Rain', isCorrect: true},
                {id: 2, answerText: 'Snow', isCorrect: false},
                {id: 3, answerText: 'Wind', isCorrect: false}
            ]
        },
        {
            answerOptions: [
                {id: 0, background: CityBG, audio: citySound},
                {id: 1, answerText: 'Island', isCorrect: false,},
                {id: 2, answerText: 'City', isCorrect: true},
                {id: 3, answerText: 'Beach', isCorrect: false}
            ]
        }
    ]

    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [showScore, setShowScore] = useState(false)
    const [score, setScore] = useState(0)
    const [incorrectAnswer, setIncorrectAnswer] = useState(false)
    const text = true;

    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1)
            setIncorrectAnswer(false)
        } else {
            setIncorrectAnswer(true)
        }
    }

    const nextQuestion = () => {
        const nextQuestion = currentQuestion + 1
        if (nextQuestion < sounds.length) {
            setCurrentQuestion(nextQuestion)
        } else {
            setShowScore(true)
        }
    }

    return(
        <div className='l-wrapper'>
            {showScore ? (
                <div className='score-section'>
                    You scored <span className='score-span'>{score}</span> out of <span className='score-span'>{sounds.length}</span>
                </div>
            ) : (
                <div>
                    <div className='question-section'>
                        <div className='sound-count'>
                            <img src={smallHex} alt={smallHex}/> <span> + {currentQuestion + 1}</span>
                        </div>
                        <div className="sound-flex">
                            <span>Выбери правильную </span>
                            <span>ассоциацию для звука</span>
                        </div>
                    </div>
                    <div className='answer-section'>
                        {sounds[currentQuestion].answerOptions.map((answerOption, i) => (
                            <div key={i} className='sound-block' style={{backgroundColor: text === answerOption.isCorrect ? "red" : "green"}}>
                                <div className='answer-sound' onClick={() =>
                                    handleAnswerOptionClick(answerOption.isCorrect)}>
                                    <h3>{answerOption.answerText}</h3>
                                </div>
                                <img src={answerOption.background} className='bg-img'/>
                                <audio src={answerOption.audio} loop controls  />
                            </div>
                        ))}
                        <div className="nextBtn" onClick={nextQuestion}>Пропустить</div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Quiz
