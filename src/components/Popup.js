import { Dialog, DialogContent, DialogTitle, makeStyles, Typography } from '@material-ui/core';
import React from 'react'
import Controls from "./controls/Controls";
import CloseIcon from '@material-ui/icons/Close'

const useStyles = makeStyles(theme => ({
    DialogWrapper: {
        padding: theme.spacing(2),
        position:'absolute',
        top: theme.spacing(5),
        width: '40%'
    },
}))

export default function Popup(props){
    const {title, children,openPopup, setOpenPopup} = props;
    const classes = useStyles();
    return(
       <Dialog open={openPopup} maxWidth="md" classes={{paper :classes.DialogWrapper}}>
            <DialogTitle>
                <div style={{display:'flex'}}><Typography
                        variant = "h6" component="div" style={{ flexGrow:1}}>
                            {title}
                    </Typography>
                    <Controls.ActionButton color="secondary" onClick={()=>{setOpenPopup(false)}}>
                        <CloseIcon/>
                    </Controls.ActionButton>
                </div>
                </DialogTitle>
                <DialogContent>
                {children}
                    </DialogContent>   
       </Dialog>
    )
}