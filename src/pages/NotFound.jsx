import Box from "@mui/material/Box"
import Typography from '@mui/material/Typography'

import Button from '@mui/material/Button'
import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <Box sx={{}}>
      <Typography
        my={"1rem"}
        fontWeight={"bold"}
        textAlign={"center"}
        variant="h2"
        color="initial">
        404
      </Typography>
      <Typography
        my={"1rem"}
        fontWeight={"bold"}
        textAlign={"center"}
        variant="h4"
        color="initial">
        Page Not Found !
      </Typography>

      <img
        style={{
          width: "95%", maxWidth: "300px",
          margin: "auto", display: "block",
        }}
        src='/quiz-app/images/404.png'
        alt="Not Found Page Image"
      />

      <Link to={"/quiz-app"}>
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: "2rem", mx: "auto", display: "block" }}
        >
          Go To Home
        </Button>
      </Link>


    </Box>
  )
}

export default NotFound