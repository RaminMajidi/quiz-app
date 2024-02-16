import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import Divider from '@mui/material/Divider';

const ResultItem = ({ data, index }) => {
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
            <Grid item xs={12} md={6}>
                <Paper variant="outlined" elevation={1} >
                    <Typography variant="subtitle2">
                        Answer 1
                    </Typography>
                </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
                <Paper variant="outlined" elevation={1} >
                    <Typography variant="subtitle2">
                        Answer 1
                    </Typography>
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