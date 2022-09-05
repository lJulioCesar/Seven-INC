import React from 'react'
import { makeStyles, withStyles } from "@material-ui/core";
import { MainListItems, SecondaryList,CustomGrid } from './menuIcons'
import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'

const style = {
    sideMenu: {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        left: '0px',
        width: '320px',
        height: '100%',
        backgroundColor: '#253053'
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
    },
}

const SideMenu = (props) => {
    const { classes } = props;
    return (
        <div className={classes.sideMenu}>
           
            <div style={{display: 'flex', flexDirection: 'column',marginLeft: 20}}>
            <CustomGrid className={classes.toolbarIcon}>
                    <IconButton>
                        <ChevronLeftIcon />
                    </IconButton>
                </CustomGrid>
                <List><MainListItems /></List>
                <List>
                    <SecondaryList {...props} />
                </List>
            </div>
        </div>
    )
}

export default withStyles(style)(SideMenu);
