import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import * as yup from 'yup';
import axios from 'axios';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const validateSchema = yup.object().shape({

  email: yup.string().email().required().label('Email'),
  password: yup.string().required().label('Password')
});

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignInSide() {
  const classes = useStyles();
  let [email, setEmail] = React.useState('');
  let [password, setPassword] = React.useState('');
  let [touched, setTouched] = React.useState({});
  let [errorMessage, setErrorMessage] = React.useState({});

  const handleEmailChange = (values) => {

    setEmail(email = values.target.value);
    hasError();
  }

  const handlePasswordChange = (values) => {

    setPassword(password = values.target.value);
    hasError();

  }

  const isTouched = (value) => {

    setTouched({
      ...touched,
      [value]: true
    });

    hasError();
    
  }

  const hasError = () => {
    const parsedError = {};
    validateSchema.validate({
      email,
      password
    }, { abortEarly: false }).then(() => {

      setErrorMessage(errorMessage = {});

    }).catch((error) => {
      error.inner.forEach((err) => {
        if (touched[err.path]) {
          parsedError[err.path] = err.message;
        }

        setErrorMessage(Object.assign(errorMessage,parsedError));
        console.log('erorr message', errorMessage);
      });

    })

  }

  const handleSubmit = async ()=>{
    
    console.log('login');
   const userData = await axios.post('http://localhost:9000/api/accounts/login',{
      email, 
      password
    });
    console.log(userData.data);

  }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <AccountCircleRoundedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              helperText={errorMessage.email}
              onChange={handleEmailChange}
              onBlur={() => isTouched('email')}
              error={errorMessage.email}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              helperText={errorMessage.password}
              onChange={handlePasswordChange}
              onBlur={() => isTouched('password')}
              error={errorMessage.password}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleSubmit}
            >
              Login
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}