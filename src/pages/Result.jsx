import { useEffect, useState } from "react"
import { useLocation } from 'react-router-dom';
import NotFound from "./NotFound";
import useQuizStore from "../zustand/quizStore";

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
        <div>Result Page</div>
    )
}

export default Result