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
  Checkbox,
} from '@material-ui/core';

import useStyles from './styles';
import { Form } from '@unform/web';
import Input from '../../../../components/Input';

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

function Task() {
  const classes = useStyles();
  const [value, setValue] = React.useState(2);
  const [value2, setValue2] = React.useState(2);
  const [value3, setValue3] = React.useState(2);
  const [TextZero, setTextZero] = React.useState(1);
  const [zero, setZero] = React.useState(false);

  function allRight() {
    setValue(1);
    setValue2(1);
    setValue3(1);

    setZero(false);
  }

  function allWrong() {
    setValue(2);
    setValue2(2);
    setValue3(2);
  }

  function zeroFunction(value) {
    if (value) {
      allWrong();
    }

    setZero(value);
  }

  return (
    <Paper className={classes.paper}>
      <Grid container spacing={2}>
        <Grid
          item
          xs={7}
          sm={8}
          xs={12}
          style={{ borderRight: '1px solid #483699' }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography className={classes.title}>Tarefa</Typography>
            </Grid>

            <Grid item xs={12}>
              <Typography className={classes.subTitle}>
                Desafio 1 - Somos Do Mesmo Sangue, Tu E Eu.
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Typography className={classes.label}>
                Itens e Respostas
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <Typography className={classes.taskTitle}>
                    1 - Fazer A Foto Com Os Bracos Dos Membros Da Equipe
                  </Typography>
                </Grid>

                <Grid item xs={12}>
                  <FormControl component="fieldset">
                    <RadioGroup
                      aria-label="gender"
                      name="gender1"
                      value={value}
                      onChange={(event) => setValue(Number(event.target.value))}
                    >
                      <Grid container spacing={2} wrap="nowrap">
                        <Grid item>
                          <FormControlLabel
                            value={1}
                            control={<CustomRadio />}
                            label="Certo"
                          />
                        </Grid>

                        <Grid item>
                          <FormControlLabel
                            value={2}
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

            <Grid item xs={12}>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <Typography className={classes.taskTitle}>
                    2 - Todos Devem Estar Usando A Camisa Verde
                  </Typography>
                </Grid>

                <Grid item xs={12}>
                  <Button
                    href={'https://www.facebook.com/alecsander.souzafarias/'}
                    target="_blank"
                    style={{ textTransform: 'capitalize' }}
                    className={classes.taskAnswer}
                  >
                    https://www.facebook.com/alecsander.souzafarias/
                  </Button>
                </Grid>

                <Grid item xs={12}>
                  <FormControl component="fieldset">
                    <RadioGroup
                      aria-label="gender"
                      name="gender1"
                      value={value2}
                      onChange={(event) =>
                        setValue2(Number(event.target.value))
                      }
                    >
                      <Grid container spacing={2} wrap="nowrap">
                        <Grid item>
                          <FormControlLabel
                            value={1}
                            control={<CustomRadio />}
                            label="Certo"
                          />
                        </Grid>

                        <Grid item>
                          <FormControlLabel
                            value={2}
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

            <Grid item xs={12}>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <Typography className={classes.taskTitle}>
                    3 - O Poema Precisa Estar Bem Escrito
                  </Typography>
                </Grid>

                <Grid item xs={12}>
                  <Typography className={classes.taskAnswer}>
                    Poema bonitp
                  </Typography>
                </Grid>

                <Grid item xs={12}>
                  <FormControl component="fieldset">
                    <RadioGroup
                      aria-label="gender"
                      name="gender1"
                      value={value3}
                      onChange={(event) =>
                        setValue3(Number(event.target.value))
                      }
                    >
                      <Grid container spacing={2} wrap="nowrap">
                        <Grid item>
                          <FormControlLabel
                            value={1}
                            control={<CustomRadio />}
                            label="Certo"
                          />
                        </Grid>

                        <Grid item>
                          <FormControlLabel
                            value={2}
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
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={zero}
                            onChange={(e) => zeroFunction(e.target.checked)}
                            name="checkedB"
                            color="primary"
                          />
                        }
                        label={
                          <Typography className={classes.label}>
                            Zerar resposta
                          </Typography>
                        }
                      />
                    </Grid>

                    {zero && (
                      <Grid item xs={12}>
                        <Form onSubmit={(e) => console.log(e)}>
                          <Input
                            name="zeroReason"
                            label="motivo por zerar"
                            multiline
                          />
                        </Form>
                      </Grid>
                    )}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Grid item style={{ marginTop: 20 }}>
              <Button fullWidth className={classes.btn1}>
                Enviar correção
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Task;
