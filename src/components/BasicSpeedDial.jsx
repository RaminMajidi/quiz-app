import * as React from 'react';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from "react-router-dom";



export default function BasicSpeedDial() {
    const navigate = useNavigate()
    return (
        <>
            <SpeedDial
                ariaLabel="SpeedDial basic example"
                sx={{ position: 'fixed', bottom: 16, right: 16 }}
                icon={<SpeedDialIcon />}
            >
                <SpeedDialAction
                    onClick={() => navigate("/")}
                    key="Home"
                    icon={<HomeIcon />}
                    tooltipTitle="Home"
                />
            </SpeedDial>
        </>
    );
}
