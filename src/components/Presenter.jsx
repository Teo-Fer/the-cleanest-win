import React, { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import degiLogo from '../assets/logo.png'
import ParticlesBg from 'particles-bg'

const Presenter = () => {

    return (
        <>
            <img src={degiLogo} alt="Logo" className="logo" />
            <TypeAnimation
                sequence={[
                    // Same substring at the start will only be typed out once, initially
                    '\"La limpieza es un trabajo en equipo\"',
                    1000,
                    '\"La limpieza es un trabajo en equipo\"',
                    1000
                ]}
                speed={40}
                className='type-animation'
                repeat={Infinity}
            />
            <ParticlesBg color="#0070be" num={100} type="cobweb" bg={true} />
        </>
    )
}

export default Presenter