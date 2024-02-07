import { createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';
import { makeStyles } from 'tss-react/mui';
// export const theme = createTheme({
//     myButton: {
//         transition:"all .5s ease-in-out",
//         margin: '1rem',
//         backgroundColor: "red",
//         color: "white",
//         border: "none",
//         "&:hover": {
//             backgroundColor: 'gold',
//             border:"1px solid black"
//         }
//     }
// });





const useStyles = makeStyles()((theme) => {
    return {
        heroImg: {
            width: "100%",
            maxWidth: "500px",
        }
    }
})