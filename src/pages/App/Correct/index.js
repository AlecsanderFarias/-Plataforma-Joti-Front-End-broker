/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { Container, CircularProgress } from '@material-ui/core';
import Task from './Task';
import api from '../../../services/api';
import { toast } from 'react-toastify';
import history from '../../../services/history';

function Dashboard({ match }) {
  const { number } = match.params;
  const [loading, setLoading] = React.useState(false);
  const [task, setTask] = React.useState(null);

  async function getRandomTask() {
    try {
      setLoading(true);

      const response = await api.get(`/agent/answer/${number}`);

      if (!response.data) {
        toast.error('Nao existem tarefas deste tipo para corrigir.');
        history.push('/dashboard');
      } else {
        setTask(response.data);
      }

      setLoading(false);
    } catch (error) {
      toast.error('Ocorreu algum erro, tente novamente mais tarde.');
      setLoading(false);
    }
  }

  React.useEffect(() => {
    getRandomTask();
  }, []);

  return (
    <Container maxWidth="lg">
      {loading ? (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <CircularProgress
            style={{ color: '#483699' }}
            onClick={() => setLoading(false)}
          />
        </div>
      ) : (
        <Task data={task} att={() => getRandomTask()} />
      )}
    </Container>
  );
}

export default Dashboard;
