import React from 'react'
import LOGO from '../../images/Logo.svg'
import './NavBar.css'
import {useNavigate} from "react-router-dom";

const NavBar = () => {

    let navigate = useNavigate()

    const mainPage = () => {
        navigate('/')
    };

    return (
        <div className='n-wrapper'>
            <div className='n-left'>
                <div className='n-name'>
                    <img src={LOGO} alt={'logo'} onClick={mainPage}/>
                </div>
            </div>
        </div>
    )
}

export default NavBar