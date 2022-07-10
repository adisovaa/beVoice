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
            <a href={`#${i}`} key={i} onClick={clickHeader}>
                <div className='l-block'>
                    <h2>{text}</h2>
                </div>
            </a>
        )
    })

    const context = new window.AudioContext();
    const playFile = (filepath) => {
        fetch(filepath)
            .then(response => response.arrayBuffer())
            .then(arrayBuffer => context.decodeAudioData(arrayBuffer))
            .then(audioBuffer => {
                const soundSource = context.createBufferSource();
                soundSource.buffer = audioBuffer;
                soundSource.connect(context.destination);
                soundSource.start();
            });
    }

    const playSound = () => {
        playFile('https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/success.mp3');
    }

    return (
        <div className='l-wrapper'>
            <div className='m-text'>
                <h1>Выбери раздел для изучения</h1>
                <div className="m-flex">
                    <span>Нажми стрелку вниз, чтобы выбрать раздел. </span>
                    <span>Чтобы озвучить свой ответ нажми на пробел.</span>
                </div>
            </div>

            <div className='l-blocks' onClick={playSound}>
                {lessonParts}
            </div>

            <div className="m-bee-img">
                <img className='l-img' src={L_BEE} alt={'l-bee'}/>
            </div>
        </div>
    )
}

export default Lesson