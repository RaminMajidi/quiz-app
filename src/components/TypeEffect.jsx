import Typewriter from 'typewriter-effect';
import {Typography } from '@mui/material';
import { names } from '../assets/data/data';


export const TypeEffect = () => {
    return (

        <Typography variant="h6" color="#fafafa" textAlign="center">
            <span>The QuizApp includes a wide number of</span>
            <Typewriter
                options={{
                    strings: names,
                    autoStart: true,
                    loop: true,
                }}
            />
            <span>questions</span>
        </Typography>


    )
}
