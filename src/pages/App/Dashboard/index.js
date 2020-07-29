import React from 'react';
import {
  Container,
  CircularProgress,
  Paper,
  Grid,
  Typography,
  Button,
  withWidth,
} from '@material-ui/core';
import useStyles from './styles';
import history from '../../../services/history';
import logo from '../../../assets/logo.svg';

const vector = [
  {
    _id: 'da5s1da2sd3as',
    name: 'Tarefa 1',
    number: 1,
  },
  {
    _id: 'da5s1da1sd3as',
    name: 'Tarefa 2',
    number: 2,
  },
  {
    _id: 'da5s1d72sd3as',
    name: 'Tarefa 3',
    number: 3,
  },
];

function Dashboard() {
  const [loading, setLoading] = React.useState(false);
  const classes = useStyles();

  function handle(e) {
    history.push(`/task/${e.number}`);
  }
  React.useEffect(() => console.log('Abrindo page'), []);

  return (
    <Container maxWidth="lg">
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          {loading ? (
            <Grid
              item
              xs={12}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <CircularProgress />
            </Grid>
          ) : (
            <>
              <Grid item xs={12}>
                <Typography className={classes.title}>
                  Tarefas (escolha qual quer corrigir)
                </Typography>
              </Grid>

              {vector.map((task) => (
                <Grid item xs={12} sm={4} md={3}>
                  <Button
                    fullWidth
                    onClick={() => handle(task)}
                    href={`/task/${task.number}`}
                  >
                    <Grid container spacing={2}>
                      <Grid
                        item
                        xs={12}
                        style={{ display: 'flex', justifyContent: 'center' }}
                      >
                        <img src={logo} className={classes.img} />
                      </Grid>
                      <Grid item xs={12}>
                        <Typography className={classes.taskName}>
                          {task.name}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Button>
                </Grid>
              ))}
            </>
          )}
        </Grid>
      </Paper>
    </Container>
  );
}

export default withWidth()(Dashboard);
