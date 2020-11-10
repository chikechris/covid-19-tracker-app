import React from 'react' 
import { Card, CardContent, Typography, Grid } from '@material-ui/core' 

import './Cards.css'

const Cards = (props) => {
  console.log(props)
  return (
    <div className= 'container'>
      <Grid container spacing={3} justify= 'center'>
        <Grid item component={Card}>
          <CardContent>
            <Typography color='textSecondary' gutterBottom>Infected</Typography>
            <Typography variant='h5'>Real Data</Typography>
            <Typography color='textSecondary'>Real Date</Typography> 
            <Typography variant='body2'>Active cases of COVID-19</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  )
}

export default Cards
