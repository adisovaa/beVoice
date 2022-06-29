import React from "react"
import AlBee from './../../../../images/AudioLesson_bee.svg'
import {useNavigate} from "react-router-dom";

import './AudioLesson.css'

const AudioLesson = () => {

    const audioLessons = ['Теория', 'Практика']
    let navigate = useNavigate()

    const clickHeader = e => {
        if (e.target.textContent === 'Теория') {
            navigate('/theory')
        } else if (e.target.textContent === 'Практика') {
            navigate('/practice2')
        }
    }

    let audioParts = audioLessons.map((text, i) => {
        return (
            <a href={`#${i}`} key={i} onClick={clickHeader} >
                <div className='al-block'>
                    <h2>{text}</h2>
                </div>
            </a>
        )
    })

    return(
        <div className='al-wrapper'>
            <div className="al-img">
                <img src={AlBee} alt='bee'/>
            </div>

            <div className="al-blocks">
                <div className="al-text">
                    <h2>Ты почти у цели, выбери теорию или практику</h2>
                    <div className="m-flex">
                        <span>Нажми стрелку вниз, чтобы выбрать. </span>
                        <span>Чтобы озвучить свой ответ нажми на пробел.</span>
                    </div>
                </div>
                {audioParts}
            </div>

        </div>
    )
}

export default AudioLesson