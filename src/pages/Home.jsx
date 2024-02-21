import Particle from "../components/Particle";
import { TypeEffect } from "../components/TypeEffect";
import { Box, Grid, Button } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { useState } from "react";
import FormDialog from "../components/FormDialog";


const useStyles = makeStyles()((theme) => {
  return {
    heroImg: {
      display: "inline-block",
      width: "100%",
      padding: "10px",
      maxWidth: "500px",
      textAlign: "center",
      margin: "auto",
      userSelect: "none"
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

const Home = () => {
  const [open, setOpen] = useState(false)
  const { classes } = useStyles()

  return (
    <>
      <Particle />
      <FormDialog open={open} setOpen={setOpen} />
      <Box className={classes.heroBox}>
        <Grid container spacing={2}>
          <Grid item xs={10} md={6} margin={"auto"} textAlign="center" >
            <TypeEffect />
            <Button
              onClick={() => setOpen(true)}
              variant="contained"
              color="info"
              style={{ marginTop: "1rem" }}
            >
              Take A Quiz
            </Button>
          </Grid>
          <Grid item xs={10} md={6} textAlign="center" margin={'auto'}>
            <img
              className={classes.heroImg}
              src='images/laptop.png'
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Home