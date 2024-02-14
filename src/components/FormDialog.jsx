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
import { redirect } from "react-router-dom"
const BASE_URL = import.meta.env.VITE_BASE_URL;
const TOKEN = import.meta.env.VITE_TOKEN;



const FormDialog = ({ open, setOpen }) => {

    const [category, setCategory] = useState('')
    const [difficulty, setDifficulty] = useState('')
    const [tags, setTags] = useState([])
    const [loading, setLoading] = useState(false)
    const { setQuiz,questions } = useQuizStore()

    const handleClose = () => {
        setOpen(false);
    };

    const handleGenarateQuiz = async () => {
        const url = BASE_URL + `?apiKey=${TOKEN}&category=${category}&difficulty=${difficulty}&limit=20&tags=${tags?.toString()}`;
        setLoading(true)
        const res = await fetch(url)
        if (res.status === 200) {
            const data = await res.json()
            console.log(data);
            await setQuiz(data)
            setLoading(false)
            console.log(questions);
            return redirect("/quiz");
        } else {
            console.log(res.status);
        }
        setLoading(false)
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
                        Please enter the details of your questionnaire so that we can create
                        the desired questions for you.
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