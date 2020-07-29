import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    height: 64,
    display: 'flex',
    flexDirection: 'row',
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: '#483699',
    padding: '5px 40px',

    [theme.breakpoints.down('md')]: {
      padding: 0,
    },
  },

  toolbar: {
    height: '100%',
    minHeight: '100%',
    flex: 1,
    [theme.breakpoints.down('md')]: {
      paddingTop: 5,
      paddingBottom: 5,
    },
  },

  appBarShift: {
    width: `100%`,
    height: '100%',
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },

  hide: {
    display: 'none',
  },

  divImg: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 79,
    height: 53,
  },

  button: {
    border: '2px solid #FFFFFF',
    borderRadius: 4,
    padding: '8px 19px',
  },
  icon: {
    color: '#fff',
    transform: 'rotateY(180deg)',
    fontSize: 17,
  },
  text: {
    textAlign: 'left',
    fontWeight: 400,
    fontFamily: 'Source Sans Pro',
    letterSpacing: 0.6,
    color: '#FFFFFF',
    marginLeft: 10,
    textTransform: 'capitalize',
  },

  menuButton: {
    backgroundColor: '#C8BCFD !important',
    borderRadius: 0,
  },

  menuButtonText: {
    color: '#483699',
    fontSize: 30,
    fontWeight: 400,
    fontFamily: 'Source Sans Pro',
    fontSize: 28,
  },

  menuButtonTextWhite: {
    color: '#fff !important',
    fontWeight: 400,
    fontFamily: 'Source Sans Pro',
    fontSize: 28,
  },
}));
