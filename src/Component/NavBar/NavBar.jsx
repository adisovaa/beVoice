import React from 'react'
import LOGO from '../../images/Logo.svg'
import './NavBar.css'
import {useLocation, useNavigate} from "react-router-dom";


const NavBar = () => {
    let navigate = useNavigate()

    const mainPage = () => {
        navigate('/')
    };

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
        <div className='n-wrapper'>
            <div className='n-left'>
                { useLocation().pathname !== "/"
                    ? <div onClick={playSound}>
                            <div className='closeModal' onClick={() => navigate(-2)}><span>Назад</span></div>
                      </div>
                    : <div className='n-name'>
                           <img src={LOGO} alt={'logo'} onClick={mainPage}/>
                      </div>
                }
            </div>
        </div>
    )
}

export default NavBar