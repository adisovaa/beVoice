import React from 'react'
import './MainPage.css'
import BEE from './../../images/b.svg'
import {useNavigate} from "react-router-dom";

const MainPage = () => {
    let navigate = useNavigate()
    const hexagonText = ['Профиль', 'Уроки', 'Словарь', 'Настройки', 'Помощь']

    const clickHeader = e => {
        if (e.target.textContent === 'Профиль') {
            navigate('/')
        } else if (e.target.textContent === 'Уроки') {
            navigate('/lesson')
        } else if (e.target.textContent === 'Словарь') {
            navigate('/')
        } else if (e.target.textContent === 'Настройки') {
            navigate('/')
        } else if (e.target.textContent === 'Помощь') {
            navigate('/')
        }
    }

    let showText = hexagonText.map((text, i) => {
        return (
            <a href={`#${i}`} key={i}>
                <div className='container' onClick={clickHeader}>
                    <div className='clip-path-inset-square'>
                        <h2>{text}</h2>
                    </div>
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
        <div className='m-wrapper'>
            <div className='m-text'>
                <h1>Ты на главной странице</h1>
                <div className="m-flex">
                    <span>Нажми стрелку вниз, чтобы выбрать раздел.</span>
                    <span>Чтобы озвучить свой ответ нажми на пробел.</span>
                </div>
            </div>
            <div className="m-blocks" onClick={playSound}>
                {showText}
                <svg className='svg-hex' width="0" height="0" xmlns="http://www.w3.org/2000/svg" version="1.1">
                    <defs>
                        <filter id="goo">
                            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
                            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
                            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                        </filter>
                    </defs>
                </svg>
            </div>
            <div className="m-bee-img">
                <img src={BEE} alt={'bee'}/>
            </div>
        </div>
    )
}

export default MainPage