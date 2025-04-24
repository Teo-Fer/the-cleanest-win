import React, { useState } from 'react';
import './ComingSoon.css';
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import { LightModeOutlined } from '@mui/icons-material';
import { DarkModeOutlined } from '@mui/icons-material';

import '@leenguyen/react-flip-clock-countdown/dist/index.css';
import { TypeAnimation } from 'react-type-animation';
import degiLogo from '../assets/logo.png'

const ComingSoon = ({ targetDate }) => {

    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    };

    return (
        <div className={`coming-soon-container ${isDarkTheme ? 'dark' : 'light'}`}>
            <img src={degiLogo} alt="Logo" className="logo" />
            <TypeAnimation
                sequence={[
                    // Same substring at the start will only be typed out once, initially
                    'Se viene cositas...',
                    1000,
                    'Se viene cositas...',
                    1000
                ]}
                speed={50}
                style={{ fontSize: '3em', display: 'inline-block', textAlign: "center" }}
                repeat={Infinity}
            />
            <FlipClockCountdown
                to={targetDate}
                labels={['Días', 'Horas', 'Minutos', 'Segundos']}
                labelStyle={{ fontSize: '1rem', fontWeight: 500, textTransform: 'uppercase' }}
                digitBlockStyle={{ width: '2em', height: '3em', fontSize: '2rem' }} // Cambia a un porcentaje
                dividerStyle={{ color: 'gray', height: 1 }}
                separatorStyle={{ color: 'white', size: '0.5em' }}
                duration={0.5}
                className='flip-clock'
                style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', padding: '1em' }} // Permitir que se envuelvan
            >
            </FlipClockCountdown>

            <button onClick={toggleTheme} className="theme-toggle">
                {isDarkTheme ? <LightModeOutlined /> : <DarkModeOutlined />}
            </button>
        </div>
    );
};

export default ComingSoon;