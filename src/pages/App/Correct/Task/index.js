import React from 'react';
import {
  Paper,
  Grid,
  Typography,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  withStyles,
  Button,
  CircularProgress,
} from '@material-ui/core';

import { ReportProblem } from '@material-ui/icons';
import api from '../../../../services/api';
import useStyles from './styles';
import { toast } from 'react-toastify';

function validURL(str) {
  var pattern = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$',
    'i'
  ); // fragment locator
  return !!pattern.test(str);
}

const CustomRadio = withStyles({
  root: {
    color: '#483699',
    '&$checked': {
      color: '#483699',
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

function Task({ data, att }) {
  const classes = useStyles();
  const [items, setItems] = React.useState(
    data ? data.taskItens.map((item) => 0) : []
  );
  const [text, setText] = React.useState('');
  const [change, setChange] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  function allRight() {
    setItems([...data.taskItens].reverse().map((task) => task.taskItem.grade));
    console.log(
      [...data.taskItens].reverse().map((task) => task.taskItem.grade)
    );
  }

  function allWrong() {
    setItems(items.map((item) => 0));
  }

  function mark(value, index) {
    let newVector = items;
    newVector[index] = value;
    setItems(newVector);

    setChange(!change);
  }

  async function submit() {
    const preArray = items;

    let query = {
      answer: data._id,
      alert: text,
      taskItens: preArray.reverse().map((item) => ({
        grade: Number(item),
      })),
    };

    try {
      setLoading(true);

      await api.post('/agent', query);

      toast.success('Tarefa corrigada com sucesso.');
      setLoading(false);

      att();
    } catch (error) {
      toast.error('Ocorreu algum erro, tente novamente mais tarde.');
      setLoading(false);
    }
  }

  return (
    <Paper className={classes.paper}>
      <Grid container spacing={2}>
        <Grid item sm={8} xs={12} style={{ borderRight: '1px solid #483699' }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Typography className={classes.title}>Tarefa</Typography>
                </Grid>

                <Grid item>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={8} md={9}>
                      <Button>
                        <ReportProblem
                          style={{ color: '#483699', marginRight: 10 }}
                        />
                        Reportar problema
                      </Button>
                    </Grid>

                    <Grid item xs={12} sm={4} md={3}>
                      <Button fullWidth href="/dashboard">
                        Sair
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <Typography className={classes.subTitle}>
                {data && `Desafio ${data.task.number} - ${data.task.title}`}
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Typography className={classes.label}>
                Itens e Respostas
              </Typography>
            </Grid>

            {data &&
              [...data.taskItens].reverse().map((task, index) => (
                <Grid item xs={12}>
                  <Grid container spacing={1}>
                    <Grid item xs={12}>
                      <Typography className={classes.taskTitle}>
                        {`${Number(index) + 1} - ${task.taskItem.agentsText}`}
                      </Typography>
                    </Grid>

                    {task.taskItem.camp && (
                      <Grid item xs={12}>
                        {validURL(task.answer) ? (
                          <Button link href={`task.answer`} target="_blank">
                            {task.answer}
                          </Button>
                        ) : (
                          <Typography className={classes.taskAnswer}>
                            {task.answer}
                          </Typography>
                        )}
                      </Grid>
                    )}

                    <Grid item xs={12}>
                      <FormControl component="fieldset">
                        <RadioGroup
                          aria-label="gender"
                          name="gender1"
                          value={items[index]}
                          onChange={(event) =>
                            mark(Number(event.target.value), index)
                          }
                        >
                          <Grid container spacing={2} wrap="nowrap">
                            <Grid item>
                              <FormControlLabel
                                value={task.taskItem.grade}
                                control={<CustomRadio />}
                                label="Certo"
                              />
                            </Grid>

                            <Grid item>
                              <FormControlLabel
                                value={0}
                                control={<CustomRadio />}
                                label="Errado"
                              />
                            </Grid>
                          </Grid>
                        </RadioGroup>
                      </FormControl>
                    </Grid>
                  </Grid>
                </Grid>
              ))}
          </Grid>
        </Grid>

        <Grid item xs={5} sm={4} xs={12}>
          <Grid
            style={{ height: '100%' }}
            container
            direction="column"
            justify="space-between"
            alignItems="stretch"
          >
            <Grid item>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <Typography className={classes.title}>
                    Opções rápidas
                  </Typography>
                </Grid>

                <Grid item xs={12}>
                  <Button
                    fullWidth
                    className={classes.btn1}
                    onClick={() => allRight()}
                  >
                    Marcar todos corretos
                  </Button>
                </Grid>

                <Grid item xs={12}>
                  <Button
                    fullWidth
                    className={classes.btn1}
                    onClick={() => allWrong()}
                  >
                    Marcar todos errados
                  </Button>
                </Grid>

                <Grid item xs={12}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Typography className={classes.label}>
                        Descrição da resposta
                      </Typography>
                    </Grid>

                    <Grid item xs={12}>
                      <textarea
                        value={text}
                        className={classes.input}
                        onChange={(e) => setText(e.target.value)}
                        name="zeroReason"
                        label="Descricao da correcao"
                        multiline
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Grid item style={{ marginTop: 20 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  {loading ? (
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <CircularProgress />
                    </div>
                  ) : (
                    <Button
                      fullWidth
                      className={classes.btn1}
                      onClick={() => submit()}
                    >
                      Enviar correção
                    </Button>
                  )}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Task;
