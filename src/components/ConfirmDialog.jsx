import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function ConfirmDialog({ open, setOpen, id, title, desc, children }) {

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby={"alert-dialog-slide-" + id}
            >
                <DialogTitle>{title}</DialogTitle>
                <DialogContent>
                    <DialogContentText id={"alert-dialog-slide-" + id}>
                        {desc}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    {children}
                </DialogActions>
            </Dialog>
        </React.Fragment >
    );
}

export default ConfirmDialog;