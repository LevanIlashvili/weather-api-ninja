import * as React from 'react';

import { Grid, Typography, CardContent, Card, Box } from '@mui/material';

export default function BasicCard({ data }) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Box style={{wordBreak: 'break-all'}}>
          <Typography variant='h5'>Temperature: {data.temp}</Typography>
          <Typography variant='h5'>Feel Like: {data.feels_like}</Typography>
          <Typography variant='h5'>Wind Speed: {data.wind_speed}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
}