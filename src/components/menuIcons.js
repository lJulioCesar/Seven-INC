import React, { Component } from "react"
import Grid from '@material-ui/core/Grid'
import {withStyles} from '@material-ui/core/styles'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import {
    Home as HomeIcon,
    PersonAdd as PersonIcon,
    People as PeopleIcon,
    ShoppingCart as CategoryIcon,
    ExitToApp as LogOutIcon
} from '@material-ui/icons'

export const CustomGrid = withStyles({
    root: {
      '& svg.MuiSvgIcon-root': {
        color: '#BDBDBD'
      },
      '& .MuiButton-contained svg.MuiSvgIcon-root': {
        color: '#fff'
      },
      '& label.Mui-focused': {
        color: 'baseColor.#00B8D4'
      },
    }
})(Grid);


export class MainListItems extends Component {
    render() {
        return (
            <CustomGrid>
                <ListItem style={{marginTop:'40px',marginBottom:'30px'}}>
                    <ListItemIcon>
                        <HomeIcon style={{fontSize:'36px', marginRight:'40px'}} />
                    </ListItemIcon>
                    <ListItemText primary="Home" style={{color:'#fff'}} />
                </ListItem>
            </CustomGrid>
        )
    }
}

export class SecondaryList extends Component {

    render() {
        return (
            <CustomGrid>
                <ListItem style={{paddingTop: '40px'}}>
                    <ListItemIcon>
                        <PersonIcon style={{fontSize:'36px', marginRight:'40px'}} />
                    </ListItemIcon>
                    <ListItemText primary="User" style={{color:'#fff'}}/>
                </ListItem>
                <ListItem style={{paddingTop: '40px'}}>
                    <ListItemIcon>
                        <PeopleIcon style={{fontSize:'36px', marginRight:'40px'}} />
                    </ListItemIcon>
                    <ListItemText primary="Role" style={{color:'#fff'}} />
                </ListItem>
                <ListItem style={{paddingTop: '40px'}}>
                    <ListItemIcon> 
                        <CategoryIcon style={{fontSize:'36px', marginRight:'40px'}} />
                    </ListItemIcon>
                    <ListItemText primary="Category" style={{color:'#fff'}}/>
                </ListItem>
                <ListItem style={{paddingTop: '40px'}}>
                    <ListItemIcon>
                        <LogOutIcon style={{fontSize:'36px', marginRight:'40px'}}/>
                    </ListItemIcon>
                    <ListItemText primary="Sign out" style={{color:'#fff'}} />
                </ListItem>
            </CustomGrid>
        )
    }
}