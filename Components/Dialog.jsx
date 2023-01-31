import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import AddCircleIcon from "@mui/icons-material/AddCircle";
import {useRouter} from "next/router";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function MyDialog({text,content,description,bacground}) {
    const [dialog, setDialog] = React.useState(false);
    const router = useRouter();
    const handleClickOpen = () => {
        setDialog(true);
    };

    const handleClose = () => {
        setDialog(false);
    };

    return (
        <div>
            <Button
                startIcon={<AddCircleIcon/>} variant="contained" onClick={handleClickOpen}>
                {text}
            </Button>
            <Dialog
                open={dialog}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle
                    sx={{background:bacground}}

                >{description}</DialogTitle>
                <DialogContent
                    sx={{background:bacground}}
                >

                    {content}
                </DialogContent>
            </Dialog>
        </div>
    );
}