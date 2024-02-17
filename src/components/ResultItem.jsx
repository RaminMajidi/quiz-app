import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import CloseIcon from '@mui/icons-material/Close';
import Divider from '@mui/material/Divider';
import Box from "@mui/material/Box"

const ResultItem = ({ data, index }) => {
    // console.log(data);
    return (
        <>
            {/* start Answer Item  */}
            <Grid item xs={12} >
                <Typography variant="h6" textAlign={"center"}>
                    Qustion {index + 1}
                </Typography>
            </Grid >
            <Grid item xs={12}>
                <Typography variant="h5" textAlign={"center"}>
                    {data.question}
                </Typography>
            </Grid>
            {/*  Correct Answer */}
            <Grid item xs={12} md={6}>
                <Paper variant="outlined" sx={{ padding: "0px 5px 5px" }} >
                    <Typography
                        variant="subtitle2"
                        textAlign={"center"}
                        sx={{ py: "5px" }}
                    >
                        Correct Answer
                    </Typography>
                    {Object.keys(data.answers).map(key => {
                        if (data.answers[key]) {
                            return (
                                <Box key={Math.random() * 1000 + data.id}
                                    sx={{ display: "flex", alignItems: "center", mb: "5px" }}>
                                    {data.correct_answers[key + "_correct"] === "true" ?
                                        (
                                            <DoneOutlineIcon
                                                fontSize='small'
                                                color='success'
                                                sx={{ mr: "5px" }}
                                            />
                                        )
                                        :
                                        (
                                            <CloseIcon
                                                fontSize='small'
                                                color='error'
                                                sx={{ mr: "5px" }}
                                            />
                                        )
                                    }
                                    <Typography variant='subtitle1'>
                                        {data.answers[key]}
                                    </Typography>
                                </Box>
                            )
                        }
                    })
                    }

                </Paper>
            </Grid>
            {/*  Your Answer */}
            <Grid item xs={12} md={6}>
                <Paper variant="outlined" sx={{ padding: "0px 5px 5px" }} >
                    <Typography
                        variant="subtitle2"
                        textAlign={"center"}
                        sx={{ py: "5px" }}
                    >
                        Your Answer
                    </Typography>
                    {Object.keys(data.answers).map(key => {
                        if (data.answers[key]) {
                            return (
                                <Box key={Math.random() * 1000 + data.id}
                                    sx={{ display: "flex", alignItems: "center", mb: "5px" }}>
                                    {data.correct_answer === key ?
                                        (
                                            <DoneOutlineIcon
                                                fontSize='small'
                                                color='success'
                                                sx={{ mr: "5px" }}
                                            />
                                        )
                                        :
                                        (
                                            <CloseIcon
                                                fontSize='small'
                                                color='error'
                                                sx={{ mr: "5px" }}
                                            />
                                        )
                                    }
                                    <Typography variant='subtitle1'>
                                        {data.answers[key]}
                                    </Typography>
                                </Box>
                            )
                        }
                    })
                    }
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Divider />
            </Grid>
            {/* End Answer Item  */}
        </>
    )
}

export default ResultItem