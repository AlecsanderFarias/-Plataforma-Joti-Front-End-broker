import { makeStyles } from '@material-ui/core/styles';
import { darken } from 'polished';

export default makeStyles((theme) => ({
  paper: {
    background: '#FBFBFB',
    boxShadow: '3px 3px 4px #0000000F',
    borderRadius: 0,
    padding: '50px 20px',
    margin: 0,
    minHeight: '100%',
  },
  title: {
    color: '#363636',
    letterSpacing: 0.6,
    textTransform: 'capitalize',
    fontFamily: 'Source Sans Pro',

    fontSize: 28,
    fontWeight: 600,
  },

  subTitle: {
    color: '#363636',
    letterSpacing: 0.6,
    textTransform: 'capitalize',
    fontFamily: 'Source Sans Pro',

    fontSize: 27,
    fontWeight: 400,
  },

  label: {
    color: '#363636',
    letterSpacing: 0.6,
    fontFamily: 'Source Sans Pro',

    fontSize: 22,
    fontWeight: 400,
  },

  media: {
    maxHeight: 250,
    width: '100%',
  },

  taskTitle: {
    color: '#363636',
    letterSpacing: 0.6,
    fontFamily: 'Source Sans Pro',

    fontSize: 16,
    fontWeight: 400,
  },

  taskAnswer: {
    color: '#483699',
    letterSpacing: 0.6,
    fontFamily: 'Source Sans Pro',

    fontSize: 14,
    fontWeight: 400,
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

    [theme.breakpoints.down('md')]: {
      fontSize: 18,
    },
  },

  input: {
    width: '100%',
    borderRadius: 5,
    border: '1px solid #483699',
    padding: '10px 8px',
    minHeight: 100,
    background: '#FBFBFB',
  },
}));
