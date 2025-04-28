import React, { useState } from 'react';
import './ComingSoon.css';
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';
import Presenter from '../components/Presenter';
import Home from './Home'

const ComingSoon = () => {
    const targetDate = new Date('2025-04-28T09:30:00'); // Cambia esta fecha a la que desees
    const [isCompleted,setIsCompleted] = useState(false)
    return (
        <div className={`coming-soon-container`}>
            {/* <Background style={{color:"red"}}/> */}
            {!isCompleted && <Presenter/>}
            
            <FlipClockCountdown
                to={targetDate}
                labels={['Días', 'Horas', 'Minutos', 'Segundos']}
                duration={0.5}
                className='flip-clock'
                onComplete={() => setIsCompleted(true)}
                >
            <Home/>
            </FlipClockCountdown>
        </div>
    );
};

export default ComingSoon;