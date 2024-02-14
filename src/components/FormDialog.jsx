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



const FormDialog = ({ open, setOpen }) => {

    const [category, setCategory] = useState('')
    const [difficulty, setDifficulty] = useState('')
    const [tags, setTags] = useState([])

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Dialog
                open={open}
                onClose={handleClose}
                PaperProps={{
                    component: 'form',
                    onSubmit: (event) => {
                        console.log(category);
                        console.log(difficulty);
                        console.log(tags);
                        event.preventDefault();
                        // handleClose();
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
                        Generate Quiz
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default FormDialog