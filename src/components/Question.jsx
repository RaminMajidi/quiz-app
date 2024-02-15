import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import useQuizStore from "../zustand/quizStore"

const Question = ({ data, index }) => {

    const { setAnswer } = useQuizStore()

    const handleRadioChange = (id, event) => {
        setAnswer(id, event.target.value)
    };

    return (
        <FormControl>
            <Typography variant="h6" mb={2}>
                Question : {index + 1}
            </Typography>
            <Typography  variant="h5" mb={2}>
                {data.question}
            </Typography>
            <RadioGroup
                aria-labelledby={"radio-group-label-" + data.id}
                name="radio-group"
                onChange={(e) => handleRadioChange(data.id, e)}
            >
                {Object.keys(data.answers).map(key => {
                    if (data.answers[key]) {
                        return (
                            <FormControlLabel
                                checked={key == data.correct_answer ? true : false}
                                sx={{ mt: '.2rem', }}
                                key={data.id + key}
                                value={key}
                                control={<Radio />}
                                label={data.answers[key]}
                            />
                        )
                    }
                })
                }
            </RadioGroup>
        </FormControl>
    )
}

export default Question