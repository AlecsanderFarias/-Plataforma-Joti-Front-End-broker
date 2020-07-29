import { makeStyles } from '@material-ui/core/styles';
import { darken } from 'polished';

export default makeStyles((theme) => ({
  paper: {
    width: '100%',
    padding: 50,
    boxShadow: '0px 3px 6px #00000029',

    [theme.breakpoints.down('md')]: {
      padding: 25,
    },
  },

  title: {
    fontFamily: 'Source Sans Pro',
    fontWeight: 500,
    fontSize: 24,
    width: '100%',
    marginBottom: 20,
    letterSpacing: 0.48,
    color: '#363636',
    opacity: 1,
    textAlign: 'center',
  },

  logo: {
    maxHeight: 180,

    [theme.breakpoints.down('md')]: {
      maxHeight: 80,
    },
  },
  btn1: {
    fontFamily: 'Source Sans Pro',
    color: '#fff',
    fontWeight: 600,
    background: '#744EAA',
    fontSize: 20,
    textTransform: 'capitalize',
    '&:hover': {
      background: darken(0.08, '#744EAA'),
    },
    marginTop: 20,
    marginBottom: 30,

    [theme.breakpoints.down('md')]: {
      fontSize: 18,
    },
  },

  loading: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '30px 0',
  },

  form: {
    width: '100%',
  },
}));
