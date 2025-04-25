import React, { useState } from 'react';
import './ComingSoon.css';
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';
import { TypeAnimation } from 'react-type-animation';
import degiLogo from '../assets/logo.png'

const ComingSoon = ({ targetDate }) => {
    return (
        <div className={`coming-soon-container`}>
            {/* <Background style={{color:"red"}}/> */}
            <img src={degiLogo} alt="Logo" className="logo" />
            <TypeAnimation
                sequence={[
                    // Same substring at the start will only be typed out once, initially
                    'Se vienen cositas...',
                    1000,
                    'Se vienen cositas...',
                    1000
                ]}
                speed={50}
                style={{ fontSize: '3em', display: 'inline-block', textAlign: "center" }}
                repeat={Infinity}
            />
            <FlipClockCountdown
                to={targetDate}
                labels={['Días', 'Horas', 'Minutos', 'Segundos']}
                duration={0.5}
                className='flip-clock'
                >
            </FlipClockCountdown>
        </div>
    );
};

export default ComingSoon;