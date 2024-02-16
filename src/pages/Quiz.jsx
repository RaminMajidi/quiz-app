import { useEffect, useState } from "react"
import useQuizStore from "../zustand/quizStore"
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Question from "../components/Question";
import ConfirmDialog from "../components/ConfirmDialog";
import { useNavigate } from "react-router-dom"

const Quiz = () => {

    const navigate = useNavigate()
    const { questions } = useQuizStore()
    const [index, setIndex] = useState(0);
    const [openDialog, setOpenDialog] = useState(false)
    const [messageDialog, setMessageDialog] = useState('')


    // *******************************
    const closeDialogHandler = () => {
        setOpenDialog(false);
    };
    // *******************************

    // *******************************
    const nextQuestionHandler = () => {
        if (index < questions.length - 1) {
            setIndex(index + 1)
        }
    }
    // *******************************

    // *******************************
    const previousQuestionHandler = () => {
        if (index > 0) {
            setIndex(index - 1)
        }
    }
    // *******************************

    // *******************************
    const finishQuizHandler = () => {
        navigate("/result", { state: { message: "oK" } })
    }
    // *******************************

    // *******************************
    const endQuizHandler = async () => {
        let dontAnswer = 0
        let message = "";
        await questions.forEach(q => {
            if (q.correct_answer === null) {
                dontAnswer++;
            }
        })
        if (dontAnswer > 0) {
            message = `You have ${dontAnswer} unanswered questions, are you sure about the end of the test!?`
        } else {
            message = 'Are you sure about the end of the test!?'
        }
        setMessageDialog(message)
        setOpenDialog(true)

    }
    // *******************************

    useEffect(() => {
        if (!questions.length) {
            return navigate('/404')
        }
    }, [questions])

    useEffect(() => {
        const onConfirmRefresh = function (event) {
            event.preventDefault();
            return event.returnValue = "Are you sure you want to leave the page?";
        }
        window.addEventListener("beforeunload", onConfirmRefresh, { capture: true })
        return (
            window.removeEventListener("beforeunload", onConfirmRefresh, { capture: true })
        )
    }, [])


    return (
        <>
            <ConfirmDialog
                open={openDialog}
                setOpen={setOpenDialog}
                title={"Attention!"}
                desc={messageDialog}
            >
                <Button
                    variant="outlined"
                    color="error"
                    onClick={finishQuizHandler}>
                    Ok
                </Button>
                <Button
                    variant="outlined"
                    color="info"
                    onClick={closeDialogHandler}>
                    Cancel
                </Button>
            </ConfirmDialog>
            <Container maxWidth="md"
                sx={{
                    padding: "1.5rem .8rem",
                    height: "100dvh"
                }}
            >
                {questions.length &&
                    <>
                        <Question data={questions[index]} index={index} />
                        <Box sx={{ flexGrow: 1, mt: '2.5rem' }}>
                            <Grid container spacing={2}>
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
        </>
    )
}

export default Quiz