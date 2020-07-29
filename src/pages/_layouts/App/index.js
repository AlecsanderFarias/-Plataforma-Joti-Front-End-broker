import React from 'react';
import { useDispatch } from 'react-redux';
import { signOut } from '../../../store/modules/auth/actions';
import { Grid, AppBar, Typography, Button, Toolbar } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import withWidth from '@material-ui/core/withWidth';
import useStyles from './styles';
import logoWhite from '../../../assets/logoWhite.png';

export default function DefaultLayout({ children, match, width }) {
  const dispatch = useDispatch();
  const classes = useStyles();

  function out() {
    dispatch(signOut());
  }

  return (
    <Grid
      container
      direction="column"
      justify="space-evenly"
      alignItems="stretch"
    >
      <Grid item>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <div className={classes.divImg}>
              <img src={logoWhite} className={classes.img} />
            </div>

            <Button className={classes.button} onClick={() => out()}>
              <ExitToAppIcon className={classes.icon} />
              <Typography className={classes.text}>Sair</Typography>
            </Button>
          </Toolbar>
        </AppBar>
      </Grid>

      <Grid
        item
        style={{
          flex: 1,
          marginTop: 64,
          padding: 20,
          alignItems: 'center',
          justifyContent: 'center',
          display: 'flex',
        }}
      >
        {children}
      </Grid>
    </Grid>
  );
}
