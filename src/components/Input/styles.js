import { makeStyles } from '@material-ui/core/styles';
/* import Colors from '../../styles/color'; */

export default makeStyles((theme) => ({
  div: {
    width: '100%',
    border: `1px solid grey`,
    borderRadius: 5,
    padding: '14px 8px',
    background: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  input: {
    border: 'none',
    fontSize: 14,
    fontWeight: 'normal',
    flex: 1,
    background: '#fff',
  },

  errorMsg: {
    color: 'red',
    fontSize: 14,
  },

  error: {
    border: `1px solid red`,
  },

  button: {
    padding: 0,
  },
}));
