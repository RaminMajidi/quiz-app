import { useEffect, useState } from "react"
import useQuizStore from "../zustand/quizStore"
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Question from "../components/Question";
import { useNavigate } from "react-router-dom"

const Quiz = () => {

    const navigate = useNavigate()
    const { questions } = useQuizStore()
    const [index, setIndex] = useState(0);

    const nextQuestionHandler = () => {
        if (index < questions.length - 1) {
            setIndex(index + 1)
        }
    }

    const previousQuestionHandler = () => {
        if (index > 0) {
            setIndex(index - 1)
        }
    }

    const endQuizHandler = async () => {
        let dontAnswer = 0
        await questions.forEach(q => {
            if (q.correct_answer === null) {
                dontAnswer++;
            }
        })
        console.log("dontAnswer:" + dontAnswer);

    }

    useEffect(() => {
        if (!questions.length) {
            return navigate('/404')
        }
    }, [questions])
    return (
        <Container maxWidth="md" sx={{ padding: "1.5rem .8rem" }}>
            {questions.length &&
                <>
                    <Question data={questions[index]} index={index} />
                    <Box sx={{ flexGrow: 1, mt: '1rem' }}>
                        <Grid container spacing={4}>

                            {index > 0 &&
                                <Grid item xs={6} sm={3} md={2}>
                                    <Button
                                        sx={{ color: "#424242", width: "100%" }}
                                        color="inherit"
                                        onClick={previousQuestionHandler}
                                        variant="contained">
                                        Previous
                                    </Button>
                                </Grid>
                            }

                            {index < questions.length - 1 &&
                                <Grid item xs={6} sm={3} md={2} >
                                    <Button
                                        sx={{ width: "100%" }}
                                        color="info"
                                        onClick={nextQuestionHandler}
                                        variant="contained">
                                        Next One
                                    </Button>
                                </Grid>
                            }
                            <Grid item xs={6} sm={3} md={2}>
                                <Button
                                    sx={{ width: "100%" }}
                                    color="error"
                                    onClick={endQuizHandler}
                                    variant="contained">
                                    End Quiz
                                </Button>
                            </Grid>

                        </Grid>
                    </Box>
                </>
            }
        </Container >
    )
}

export default Quiz