import Typewriter from 'typewriter-effect';
import { Box, Typography } from '@mui/material';


export const TypeEffect = () => {
    return (

        <Typography variant="h6" color="#fafafa" textAlign="center">
            <span>The QuizApp includes a wide number of</span>
            <Typewriter
                options={{
                    strings: ['Linux', 'PHP', 'JavaScript', "HTML", 'CSS', 'BASH', 'Cloud', 'DevOps'],
                    autoStart: true,
                    loop: true,
                }}
            />
            <span>questions</span>
        </Typography>


    )
}
