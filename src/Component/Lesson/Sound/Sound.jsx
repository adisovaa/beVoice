import React, {useEffect, useRef, useState} from 'react'
import gsap from "https://cdn.skypack.dev/gsap";

import './Sound.css'
import RainBG from './../../../images/sound_bg.png'
import CityBG from './../../../images/City_bg.png'

const Sound = () => {
    const sounds = [
        {
            soundsText: 'Выбери правильную ассоциацию для звука',
            soundsBg: RainBG,
            answerOptions: [
                {id: 0, answerText: 'Rain', isCorrect: true},
                {id: 1, answerText: 'Snow', isCorrect: false},
                {id: 2, answerText: 'Wind', isCorrect: false}
            ]
        },
        {
            questionText: 'Выбери правильную ассоциацию для звука',
            soundsBg: CityBG,
            answerOptions: [
                {id: 1, answerText: 'Island', isCorrect: false},
                {id: 2, answerText: 'City', isCorrect: true},
                {id: 3, answerText: 'Beach', isCorrect: false}
            ]
        }
    ]


    return(
        <div className='sound'>
            {sounds.soundsBg}
            <div className="sound-question">

            </div>
        </div>
    )
}

export default Sound