import styled from 'styled-components';

import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  wrapper: {
    height: '100%',
    background: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    /* [theme.breakpoints.down('md')]: { */
    background: '#483699',
    /*  }, */
  },
}));
