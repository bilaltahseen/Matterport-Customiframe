import React from 'react';

import Button from '@material-ui/core/Button';

import TextField from '@material-ui/core/TextField';

import Box from '@material-ui/core/Box';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { storeContext } from '../Context/StoreContext';
import { CSSTransition } from 'react-transition-group';

import Axios from 'axios';
import { CircularProgress } from '@material-ui/core';
import useQuery from '../Utils/useQuery';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: '30px',
    zIndex: 4,
    top: '50%',
    left: '50%',
    width: '70%',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },

  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& h1': {
      color: '#fff',
      textAlign: 'left',
    },
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
  input: {
    backgroundColor: '#E8F0FE',
  },
}));

export default function Cred() {
  const classes = useStyles();
  const [state, dispatch] = React.useContext(storeContext);

  const [name, setName] = React.useState('');
  const [contact, setContact] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [isloading, setLoading] = React.useState(false);
  const id = useQuery().get('m');
  const display = useQuery().get('detail') === '0' ? 'none' : '';

  const submit = (event) => {
    event.preventDefault();
    setLoading(true);
    Axios({
      url: 'https://formspree.io/mzbjvdwd',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: { id: id, name, contact, email },
    })
      .then((resp) => {
        dispatch({ type: 'LOGGED' });
        setName('');
        setEmail('');
        setContact('');
        setLoading(false);
      })
      .catch(alert);
  };

  return (
    <CSSTransition
      timeout={5000}
      classNames='my-node'
      in={!state.isLogged}
      unmountOnExit
      appear={false}
    >
      <Container
        component='main'
        style={{ display: display }}
        className={classes.root}
        maxWidth='md'
      >
        <Container maxWidth='sm'>
          <div className={classes.paper}>
            <Typography component='h1' variant='h5'>
              Please enter your details to start.
            </Typography>
            <form className={classes.form} onSubmit={submit}>
              <TextField
                variant='filled'
                color='primary'
                margin='normal'
                inputProps={{ className: classes.input }}
                required
                onChange={(event) => setName(event.target.value)}
                fullWidth
                label='Name'
                type='text'
                autoFocus
              />
              <TextField
                variant='filled'
                color='primary'
                margin='normal'
                inputProps={{ className: classes.input }}
                required
                fullWidth
                label='Email'
                type='email'
                onChange={(event) => setEmail(event.target.value)}
                autoComplete='current-email'
              />
              <TextField
                variant='filled'
                color='primary'
                margin='normal'
                inputProps={{ className: classes.input }}
                required
                fullWidth
                label='Phone Number'
                type='number'
                onChange={(event) => setContact(event.target.value)}
              />

              <Button
                type='submit'
                disabled={isloading}
                fullWidth
                variant='contained'
                color='primary'
                className={classes.submit}
              >
                {isloading ? (
                  <CircularProgress color='inherit' style={{ color: '#fff' }} />
                ) : (
                  'Submit'
                )}
              </Button>
            </form>
          </div>
        </Container>
        <Box mt={8}></Box>
      </Container>
    </CSSTransition>
  );
}
