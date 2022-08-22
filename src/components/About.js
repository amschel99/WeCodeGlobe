import React from 'react'
import { Card,CardActionArea,CardContent,CardMedia,Typography,Box,ListItem,ListItemText,List } from '@mui/material';
import logo from '../assets/images/logo.svg'
const About = () => {
  
 
  return (
    <Card sx={{ width:{xs:'100%',sm:'79%'} }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={logo}
          alt="green iguana"
        />
        <CardContent sx={{display:'flex', justifyContent:'center',width:'100%'}}>
          <Box sx={{display:'flex', flexDirection:'column'}}>
            <Typography gutterBottom variant="h3" component="div" sx={{textAlign:'center'}}>
For software Developers
          </Typography>
          <Typography gutterBottom variant="h4" component="div" sx={{textAlign:'center'}}>
      We offer Industry Focused Training For Software Developers
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{textAlign:'center'}}>
  Go deeper and learn industry ready skills.Get free mentorship from industry experts! Work on real world and paid projects for your resume!
    Get to work with our corporate partners after succesful completion of the course.
    Join the community and elevate your career to the next level.
          </Typography>
          <Typography gutterBottom variant="h3" component="div" sx={{textAlign:'center'}}>
     For corporates
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{textAlign:'center'}}>
            Are you looking for professional developers to join your company and build your dream product?
          Our developers are highly skilled and qualified!
Trust us with your next project!
We are a team of professional software developers.
We deal with:
  </Typography>
  <List>
    <ListItem>
      <ListItemText>
<Typography sx={{textAlign:'center'}}>Web development</Typography >
      </ListItemText>
    </ListItem>
     <ListItem>
      <ListItemText>
<Typography sx={{textAlign:'center'}}>Mobile development</Typography>
      </ListItemText>
    </ListItem>
    <ListItem>
      <ListItemText>
<Typography sx={{textAlign:'center'}}> API development </Typography>
      </ListItemText>
    </ListItem>
  </List>
          </Box>
        </CardContent>
      </CardActionArea>
      
    </Card>
  );
}



export default About