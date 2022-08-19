import React from 'react'
import {Box,Typography,AvatarGroup,Avatar,ImageList,ImageListItem} from "@mui/material"
import pic from "../images/profile.jpg"
import { images } from '../images/images'

const Rightbar = () => {
  return (
     <Box sx={{display:{xs:"none",sm:"block"}}} flex={2} p={2}>

      <Box position="fixed" >
   <Typography variant="h6" fontWeight={100}>
People Online
   </Typography>
   <AvatarGroup sx={{width:240}} max={6}>

    <Avatar alt="Laureen CyberTrunk" src={pic}/>
    
    <Avatar alt="Cynthia " src={pic}/>
    
    <Avatar alt="Will" src={pic}/>
    
    <Avatar alt="Steve" src={pic}/>
    
    <Avatar alt="Becky" src=""/>
     <Avatar alt="Kira" src=""/>
    
    <Avatar alt="Erlich" src={pic}/>
    
    <Avatar alt="Simpson" src=""/>
    
    <Avatar alt="Darel"src={pic}/>
    
    <Avatar alt="Beckoylee" src=""/>
    
  
   </AvatarGroup>
   <Typography variant="h6" mt={2} mb={2}>
Trending Pictures
   </Typography>
   <ImageList cols={3} rowHeight={100} gap={5}>
    {images.map((image,i)=>(
      <ImageListItem key={i}>
<img  sx={{marginTop:2}} src={image} alt={image}/>
      </ImageListItem>

    ))}
   </ImageList>
      </Box>
     </Box>
  )
}

export default Rightbar