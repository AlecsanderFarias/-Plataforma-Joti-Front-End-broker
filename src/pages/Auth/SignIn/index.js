import React from 'react';
import {
  Container,
  Paper,
  Typography,
  Button,
  CircularProgress,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { signInRequest } from '../../../store/modules/auth/actions';
import { Form } from '@unform/web';
import Input from '../../../components/Input';

import useStyles from './styles';

import * as Yup from 'yup';
import validator from './validator';

function SignIn() {
  const dispatch = useDispatch();
  const formRef = React.useRef();
  const classes = useStyles();
  const loading = useSelector((state) => state.auth.loading);

  async function submit(data) {
    formRef.current.setErrors({});

    try {
      await validator(data);

      console.log(data);

      dispatch(signInRequest({ email: data.email, date: data.password }));
    } catch (err) {
      const validationErrors = {};
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });

        formRef.current.setErrors(validationErrors);
      }
    }
  }

  return (
    <Container maxWidth="sm">
      <Paper className={classes.paper}>
        <Typography className={classes.title}>Joti para corretores</Typography>

        <Form ref={formRef} onSubmit={submit} className={classes.form}>
          <Input name="email" label="E-mail" style={{ marginBottom: 20 }} />
          <Input name="password" label="Senha" type="password" />

          {loading ? (
            <div className={classes.loading}>
              <CircularProgress style={{ color: '#744EAA' }} size={40} />
            </div>
          ) : (
            <Button type="submit" className={classes.btn1} fullWidth>
              Entrar
            </Button>
          )}
        </Form>
      </Paper>
    </Container>
  );
}

export default SignIn;
