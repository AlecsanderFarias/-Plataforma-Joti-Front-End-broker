import React from 'react';
import { Container, CircularProgress } from '@material-ui/core';
import Task from './Task';

function Dashboard() {
  const [loading, setLoading] = React.useState(false);

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
        <Task />
      )}
    </Container>
  );
}

export default Dashboard;
