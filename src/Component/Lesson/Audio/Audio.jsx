import React from 'react'
import {useNavigate} from "react-router-dom";

import './Audio.css'

const Audio = () => {

    let navigate = useNavigate()

    const audios = ['Первая часть', 'Вторая часть', 'Третья часть', 'Четвертая часть', 'Пятая часть', 'Шестая часть', 'Седьмая часть', 'Восьмая часть', 'Девятая часть', 'Десятая часть']

    const clickHeader = e => {
        if (e.target.textContent === 'Первая часть') {
            navigate('/audio')
        } else if (e.target.textContent === 'Вторая часть') {
            navigate('/spell')
        } else if (e.target.textContent === 'Третья часть') {
            navigate('/sound')
        }
    }

    let audioParts = audios.map((text, i) => {
        return (
            <a href={`#${i}`} onClick={clickHeader}>
                <div className='a-block'>
                    <h2>{text}</h2>
                </div>
            </a>
        )
    })

    return(
        <div className='a-wrapper'>
            <div className='m-text'>
                <h1>Выбери доступную категорию уроков</h1>
                <div className="m-flex">
                    <span>Нажми стрелку вниз, чтобы выбрать. </span>
                    <span>Чтобы озвучить свой ответ нажми на пробел.</span>
                </div>
            </div>
            <div className='l-blocks'>
                {audioParts}
            </div>
        </div>
    )
}
export default Audio