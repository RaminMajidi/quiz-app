import { useEffect, useState } from "react"
import { useLocation } from 'react-router-dom'
import NotFound from "./NotFound"
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import ResultItem from "../components/ResultItem"
import BasicSpeedDial from "../components/BasicSpeedDial"


const Result = () => {
    const location = useLocation();

    if (!location.state) {
        return <NotFound />
    }

    const { questions } = location.state
    const [correctAnswer, setCorrectAnswerr] = useState(0)
    const [notAnswer, setNotAnswer] = useState(0)

    useEffect(() => {
        const quizResultHandler = async () => {
            let noAnswer = 0;
            let trueAnswer = 0;
            await questions.forEach(q => {
                if (q.correct_answer == null) {
                    noAnswer++
                }
                Object.keys(q.correct_answers).forEach((key) => {
                    if ((q.correct_answers[key] === "true") && (key.slice(0, 8) === q.correct_answer)) {
                        trueAnswer++
                    }
                })
            })
            setCorrectAnswerr(trueAnswer)
            setNotAnswer(noAnswer)
        }
        quizResultHandler()


        // clear hostory state 
        return (
            window.history.replaceState({}, '')
        )
    }, [])


    return (
        <Container maxWidth="lg"
            sx={{
                padding: "1.5rem .8rem",
                minHeight: "100dvh",
                position: "relative"
            }}
        >
            <BasicSpeedDial />

            <Grid container spacing={2}>
                <Grid item xs={12}
                    sx={{
                        display: "flex", justifyContent: "space-around",
                        flexWrap: "wrap", gap: "1rem"
                    }}
                >
                    <Typography variant="h6" >
                        Total Questions : {questions?.length}
                    </Typography>
                    <Typography variant="h6">
                        Correct Answers : {correctAnswer}
                    </Typography>
                    <Typography variant="h6">
                        Wrong Answers : {(questions?.length - notAnswer) - correctAnswer}
                    </Typography>
                    <Typography variant="h6">
                        No Answer : {notAnswer}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Divider sx={{ my: "2rem" }}>
                        <Typography variant="h5">
                            Answers
                        </Typography>
                    </Divider>
                </Grid>
                {questions?.map((item, i) => (
                    <ResultItem key={item.id} data={item} index={i} />
                ))}
            </Grid>
        </Container>
    )
}

export default Result