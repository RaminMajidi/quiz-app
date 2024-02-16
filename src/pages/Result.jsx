import { useEffect, useState } from "react"
import { useLocation } from 'react-router-dom';
import NotFound from "./NotFound";
import useQuizStore from "../zustand/quizStore";
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import Divider from '@mui/material/Divider';
import ResultItem from "../components/ResultItem";



const Result = () => {

    const location = useLocation();
    const { questions } = useQuizStore()
    const [answerNumber, setAnswerNumber] = useState(0)

    if (!location.state) {
        return <NotFound />
    }


    useEffect(() => {
        console.log(questions);
    }, [])


    return (
        <Container maxWidth="lg"
            sx={{
                padding: "1.5rem .8rem",
                minHeight: "100dvh"
            }}
        >

            <Grid container spacing={2}>
                <Grid item xs={12}
                    sx={{
                        display: "flex", justifyContent: "space-around",
                        flexWrap: "wrap", gap: "1rem"
                    }}
                >
                    <Typography variant="h6" >
                        Total Question : {questions.length}
                    </Typography>
                    <Typography variant="h6">
                        Correct Answers : {questions.length}
                    </Typography>
                    <Typography variant="h6">
                        No Answer : {questions.length}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Divider sx={{ my: "2rem" }}>
                        <Typography variant="h5">
                            Answers
                        </Typography>
                    </Divider>
                </Grid>
                {questions.map((item, i) => (
                    <ResultItem key={item.id} data={item} index={i} />
                ))}
            </Grid>
        </Container>
    )
}

export default Result