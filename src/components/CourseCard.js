import React from 'react'
import logo from '../assets/images/logo.svg'

import {Link} from 'react-router-dom'

import {Card,CardActions,Button,CardMedia,CardContent,Typography} from '@mui/material'
const CourseCard = ({name,image,duration,descrption,id}) => {




  return (
  
    <Card sx={{width:{xs:'100%',sm:'100%',md:'30%'} }}>
      <CardMedia
        component="image"
        height="140"
       
      image={image}
  alt={name}
      />
      <CardContent>
   
        <Typography gutterBottom variant="h5" component="div">
    {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {descrption}
        </Typography>
      </CardContent>
      <CardActions>
       <Typography component={Link} to={`/player/${id}`}>Watch now</Typography>

      </CardActions>
    </Card>
  );
}

  


export default CourseCard