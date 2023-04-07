import * as React from 'react';
import BasicCard from './components/card';
import { Button, Container, Grid, Paper, TextField } from '@mui/material';
import { getWeather } from './client/client';

function App() {
  const [city, setCity] = React.useState('');
  const [data, setData] = React.useState();

  const fetchWeather = () => {
    getWeather(city).then((data) => {
      console.log(data);
      setData(data);
    })
  }
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={2}></Grid>
        <Grid item xs={8} >
          <Paper elevation={3} style={{ marginTop: 20, padding: 50, textAlign: 'center' }}>
            <TextField  
              label="City" 
              variant="standard" 
              value={city} 
              onChange={(event) => setCity(event.target.value)} 
            />
            <br/>
            <Button 
              variant='outlined' 
              style={{ marginTop: 20 }}
              onClick={() => fetchWeather()}
            >GET WEATHER</Button>
          </Paper>
          {
            data && (
              <Paper style={{ marginTop: 20 }}>
                <BasicCard data={data}/>
              </Paper>
            ) 
          }
          
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;