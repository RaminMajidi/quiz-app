import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import MultipleSelectCheckmarks from './MultipleSelectCheckmarks';
import BasicSelect from './BasicSelect';
import { categores, difficultys } from '../assets/data/data';
import useQuizStore from '../zustand/quizStore';
import { useNavigate } from "react-router-dom";
import { errorHandler } from "../utils/Toast"
const BASE_URL = import.meta.env.VITE_BASE_URL;
const TOKEN = import.meta.env.VITE_TOKEN;

const FormDialog = ({ open, setOpen }) => {

    const navigate = useNavigate()
    const [category, setCategory] = useState('')
    const [difficulty, setDifficulty] = useState('')
    const [tags, setTags] = useState([])
    const [loading, setLoading] = useState(false)
    const { setQuiz } = useQuizStore()

    const handleClose = () => {
        setOpen(false);
    };

    const handleGenarateQuiz = async () => {
        const url = BASE_URL + `?apiKey=${TOKEN}&category=${category}&difficulty=${difficulty}&limit=20&tags=${tags?.toString()}`;
        setLoading(true)

        try {
            const res = await fetch(url)

            if (res.status === 200) {
                const data = await res.json()
                const questions = await data.map(q => (
                    { ...q, correct_answer: null }
                ))
                await setQuiz(questions)
                navigate("/quiz");
            }
            if (res.status === 404) {
                const error = new Error("The desired test was not found, please be more careful ?")
                errorHandler(error, 5000)
            }

        } catch (error) {
            errorHandler(error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <Dialog
                open={open}
                onClose={handleClose}
                PaperProps={{
                    component: 'form',
                    onSubmit: (event) => {
                        event.preventDefault();
                        handleGenarateQuiz();
                    },
                }}
            >
                <DialogTitle>Quiz Details</DialogTitle>
                <DialogContent>
                    <DialogContentText px={1}>
                        Please enter the details of your questionnaire so
                        that we can create the desired questions for you.
                    </DialogContentText>

                    <BasicSelect
                        inputLabbel="Category"
                        label="Category"
                        value={category}
                        setValue={setCategory}
                        items={categores}
                    />

                    <BasicSelect
                        inputLabbel="Difficulty"
                        label="Difficulty"
                        value={difficulty}
                        setValue={setDifficulty}
                        items={difficultys}
                    />
                    <MultipleSelectCheckmarks
                        inputLabel="Tags"
                        lable="Tags"
                        values={tags}
                        setValues={setTags}
                    />
                </DialogContent>
                <DialogActions>
                    <Button
                        variant="outlined"
                        color="error"
                        onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button
                        variant="contained"
                        color="info"
                        type="submit">
                        {loading ?
                            <span>Loading...</span>
                            :
                            <span>Generate Quiz</span>
                        }
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default FormDialog