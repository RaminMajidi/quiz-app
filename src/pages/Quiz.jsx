import { useEffect } from "react"
import useQuizStore from "../zustand/quizStore"

const Quiz = () => {

    const { setQuiz, questions } = useQuizStore()

    useEffect(() => {
        console.log(questions);
    }, [questions])
    return (
        <div>Quiz</div>
    )
}

export default Quiz