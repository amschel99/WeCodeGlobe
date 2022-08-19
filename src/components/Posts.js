import React from 'react'
import {Card,CardHeader,Avatar,IconButton,CardMedia,CardContent,Typography, CardActions,Checkbox} from "@mui/material"
import {MoreVert,Favorite,Share,FavoriteBorder} from "@mui/icons-material"
import pic from "../images/profile.jpg"

const Posts = () => {
  return (
  <Card sx={{margin:5}}>
        <CardHeader
        avatar={
          <Avatar sx={{bgcolor:"red"}} ></Avatar>
        }
        action={

          <IconButton aria-label="settings">
            <MoreVert/>
          </IconButton>
          
        }
        title="Why John Green Is My Favorite Writer"
        subheader="The author of the fault in our stars and looking for Alaska"
       />
       <CardMedia
       component="img"
       height="194"
       image={pic}
       alt="john grren's picture"
       />
       <CardContent>
        <Typography component="h6">
John green has this unique talent of converting emotions into words. Alchemists turn any metal into Gold. John green
turns any emotion even the unexplainable into words. He is truly an alchemist of literature....

        </Typography>
       </CardContent>
       <CardActions disableSpacing>
        <IconButton aria-label="favorites">
       <Checkbox icon={<FavoriteBorder/>} checkedIcon={<Favorite  sx={{color:"red"}}/>}/>
        </IconButton>
         <IconButton aria-label="share">
          <Share/>
        </IconButton>
       </CardActions>

      


      </Card>
  )
}

export default Posts