import React from 'react'
import {useNavigate} from "react-router-dom";
import L_BEE from './../../images/b-lesson.svg'

import './Lesson.css'

const Lesson = () => {

    let navigate = useNavigate()

    const lessons = ['Аудио уроки', 'Правописание', 'Звуковые игры']

    const clickHeader = e => {
        if (e.target.textContent === 'Аудио уроки') {
            navigate('/audio')
        } else if (e.target.textContent === 'Правописание') {
            navigate('/spell')
        } else if (e.target.textContent === 'Звуковые игры') {
            navigate('/sound')
        }
    }

    let lessonParts = lessons.map((text, i) => {
        return (
            <a href={`#${i}`} onClick={clickHeader}>
                <div className='l-block'>
                    <h2>{text}</h2>
                </div>
            </a>
        )
    })
    return (
        <div className='l-wrapper'>
            <div className='m-text'>
                <h1>Выбери раздел для изучения</h1>
                <div className="m-flex">
                    <span>Нажми стрелку вниз, чтобы выбрать раздел. </span>
                    <span>Чтобы озвучить свой ответ нажми на пробел.</span>
                </div>
            </div>

            <div className='l-blocks'>
                {lessonParts}
            </div>

            <div className="m-bee-img">
                <img className='l-img' src={L_BEE} alt={'l-bee'}/>
            </div>
        </div>
    )
}

export default Lesson