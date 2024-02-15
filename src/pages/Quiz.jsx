import { useEffect, useState } from "react"
import useQuizStore from "../zustand/quizStore"
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Question from "../components/Question";
import { useNavigate } from "react-router-dom"

const Quiz = () => {

    const navigate = useNavigate()
    const { questions } = useQuizStore()
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (!questions.length) {
            return navigate('/404')
        }
    }, [questions])
    return (
        <Container maxWidth="md" sx={{ padding: ".5rem" }}>
            {questions.length &&
                <Question data={questions[index]} />
            }
        </Container>
    )
}

export default Quiz