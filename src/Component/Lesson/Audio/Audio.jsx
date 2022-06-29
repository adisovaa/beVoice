import React, {useState} from 'react'
import {useNavigate} from "react-router-dom";
import audioBee from './../../../images/audio_bee.svg'

import './Audio.css'

const Audio = () => {

    const [style, setStyle] = useState({display: 'none'});
    let navigate = useNavigate()

    const audios = ['Первая часть', 'Вторая часть', 'Третья часть', 'Четвертая часть', 'Пятая часть', 'Шестая часть', 'Седьмая часть', 'Восьмая часть', 'Девятая часть', 'Десятая часть']

    const clickHeader = e => {
        if (e.target.textContent === 'Первая часть') {
            navigate('/audioLesson')
        } else if (e.target.textContent === 'Вторая часть') {
            navigate('/audioLesson')
        } else if (e.target.textContent === 'Третья часть') {
            navigate('/audioLesson')
        }
    }

    let audioParts = audios.map((text, i) => {
        return (
            <a href={`#${i}`} key={i} onClick={clickHeader} className='a-link'>
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
            <div className='l-blocks'
                 onMouseEnter={e => {
                     setStyle({display: 'none'});
                 }}
                 onMouseLeave={e => {
                     setStyle({display: 'block'})
                 }}
            >
                {audioParts}
            </div>
            <div className="audio-img">
                <img className='rightBee' src={audioBee} alt='Bee' style={style}/>
            </div>
        </div>
    )
}
export default Audio