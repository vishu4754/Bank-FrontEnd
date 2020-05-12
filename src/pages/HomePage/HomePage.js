import React from 'react';
// import SignInSide from '../../components/Login';
import ButtonAppBar from '../../components/NavBar';
import PinnedSubheaderList from '../../components/SideList';
import SimpleList from '../../components/List';
import { withStyles } from '@material-ui/core/styles';

const useStyles = ({
    root: {
     display: 'flex',
     flexDirection: 'row',
     justifyContent: 'space-between',
     width: '100%',
    }
  });
class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const { classes } = this.props;
        return ( 
            <>
            <ButtonAppBar/>
            <div className={classes.root}>
            <PinnedSubheaderList />
            <SimpleList />
            </div>
            </>
         );
    }
}

export default withStyles(useStyles)(HomePage);