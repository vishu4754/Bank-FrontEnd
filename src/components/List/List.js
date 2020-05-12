import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '500px', // this can be what ever unit you want, you just have to define it
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingTop: '250px',
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function SimpleList() {
    const classes = useStyles();
    const handleAccountChange =()=>{
        console.log('check for click');

    }
    return (
        <div className={classes.root} >
            <List component="nav" aria-label="main mailbox folders" >
                <ListItem button component={Link} to='/login' onClick={handleAccountChange}>
                    <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Accounts" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <DraftsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Enquiry" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <DraftsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Policies" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <DraftsIcon />
                    </ListItemIcon>
                    <ListItemText primary="ATM issues" />
                </ListItem>
            </List>
        </div>
    );
}