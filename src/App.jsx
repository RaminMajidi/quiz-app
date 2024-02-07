import Particle from "./components/Particle";
import { TypeEffect } from "./components/TypeEffect";
import { Box, Grid, Button } from '@mui/material';
import heroImg from "../public/images/laptop.png"
import { makeStyles } from 'tss-react/mui';


const useStyles = makeStyles()((theme) => {
  return {
    heroImg: {
      display: "inline-block",
      width: "100%",
      padding: "10px",
      maxWidth: "500px",
      textAlign: "center",
      margin: "auto",
      userSelect:"none"
    },
    heroBox: {
      position: "absolute",
      top: 0,
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }
  }
})

const App = () => {

  const { classes } = useStyles()


  return (
    <>
      <Particle />
      <Box className={classes.heroBox}>
        <Grid container spacing={2}>
          <Grid item xs={10} md={6} margin={"auto"} textAlign="center" >
            <TypeEffect />
            <Button variant="contained" color="info" style={{marginTop:"1rem"}}>
              Take A Quiz
            </Button>
          </Grid>
          <Grid item xs={12} md={6} textAlign="center">
            <img className={classes.heroImg}
              src={heroImg}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default App