import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import BasicSelect from './BasicSelect';
import { tags,Limits } from '../assets/data/data';
import useQuizStore from '../zustand/quizStore';
import { useNavigate } from "react-router-dom";
import { errorHandler } from "../utils/Toast"

const BASE_URL = import.meta.env.VITE_BASE_URL;
const TOKEN = import.meta.env.VITE_TOKEN;

const FormDialog = ({ open, setOpen }) => {

    const navigate = useNavigate()
    const [limit, setLimit] = useState(10)
    const [tag, setTag] = useState('')
    const [loading, setLoading] = useState(false)
    const { setQuiz } = useQuizStore()

    const handleClose = () => {
        setOpen(false);
    };

    const handleGenarateQuiz = async () => {
        const url = BASE_URL + `?apiKey=${TOKEN}&limit=${limit}&tags=${tag}`;
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
                        inputLabel="Limit"
                        label="Limit"
                        value={limit}
                        setValue={setLimit}
                        items={Limits}
                    />
                    <BasicSelect
                        inputLabel="Tag"
                        label="Tag"
                        value={tag}
                        setValue={setTag}
                        items={tags}
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