import React from 'react'
import logo from '../assets/images/logo.svg'

import {Card,CardActions,Button,CardMedia,CardContent,Typography} from '@mui/material'
const CourseCard = () => {
  return (
  
    <Card sx={{width:{xs:'100%',sm:'100%',md:'30%'} }}>
      <CardMedia
        component="img"
        height="140"
        image={logo}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

  


export default CourseCard