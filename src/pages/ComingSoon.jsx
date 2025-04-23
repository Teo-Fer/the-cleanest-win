import React, { useState, useEffect } from 'react';

import { Container, Typography, Button, Grid, Paper } from '@mui/material';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

import LightMode from '@mui/icons-material/LightMode'
import DarkMode from '@mui/icons-material/DarkMode'


const ComingSoon = () => {
    const [theme, setTheme] = useState(createTheme({
        palette: {
            mode: 'dark',
            primary: {
                main: '#1976d2',
            },
        },
    }));

    const [countdown, setCountdown] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });


    useEffect(() => {

        const launchDate = new Date("2025-04-22T23:00:00").getTime();
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = launchDate - now;
            setCountdown({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000),
            });


            if (distance < 0) {
                clearInterval(interval);
                setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }

        }, 1000);


        return () => clearInterval(interval);

    }, []);


    const toggleTheme = () => {

        setTheme(prevTheme => createTheme({

            palette: {

                mode: prevTheme.palette.mode === 'dark' ? 'light' : 'dark',

                primary: {

                    main: '#1976d2',

                },

            },

        }));

    };


    return (

        <ThemeProvider theme={theme}>

            <Container component={Paper} elevation={3} style={{ padding: '2em', textAlign: 'center' }}>

                <Typography variant="h3">¡Próximamente!</Typography>

                <Typography variant="h6">Estamos trabajando en algo increíble. ¡Mantente atento!</Typography>

                <Grid container spacing={2} justifyContent="center" style={{ margin: '2em 0' }}>

                    <Grid item>

                        <AccessAlarmIcon fontSize="large" />

                        <Typography variant="h4">{countdown.days} Días</Typography>

                    </Grid>

                    <Grid item>

                        <AccessAlarmIcon fontSize="large" />

                        <Typography variant="h4">{countdown.hours} Horas</Typography>

                    </Grid>

                    <Grid item>

                        <AccessAlarmIcon fontSize="large" />

                        <Typography variant="h4">{countdown.minutes} Minutos</Typography>

                    </Grid>

                    <Grid item>

                        <AccessAlarmIcon fontSize="large" />

                        <Typography variant="h4">{countdown.seconds} Segundos</Typography>

                    </Grid>

                </Grid>

                <div>

                    <FacebookIcon style={{ margin: '0 10px' }} />

                    <TwitterIcon style={{ margin: '0 10px' }} />

                    <InstagramIcon style={{ margin: '0 10px' }} />

                </div>

                <Button variant="contained" onClick={toggleTheme} style={{ marginTop: '2em' }}>
                    {theme.palette.mode === 'dark' ? 
                    <LightMode style={{ margin: '0 10px' }} /> 
                    :<DarkMode style={{ margin: '0 10px' }} />}
                </Button>

            </Container>

        </ThemeProvider>

    );

};


export default ComingSoon;