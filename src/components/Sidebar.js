import React,{useState} from 'react'
import {Box,List,ListItem,ListItemIcon,ListItemText,Switch} from "@mui/material"
import {Home,Pages,Groups,ShoppingBag,Settings,Person,People,ModeNight} from "@mui/icons-material"
import {Link} from "react-router-dom"


const Sidebar = ({mode,setMode}) => {


  const[items]=useState(
    [
      {label:"Home",Icon:Home},
      {label:"Pages",Icon:Pages},
      {label:"Groups",Icon:Groups},
       {label:"Marketplace",Icon:ShoppingBag},
        {label:"Friends",Icon:People},
         {label:"Settings",Icon:Settings},
           {label:"Profile",Icon:Person}
    ]
  )
 
  return (
<Box  flex={1} p={2} sx={{display:{xs:"none", sm:"block"}}}>
  <Box position="fixed">

     
        <List >
          {items.map(({label,Icon},i)=>(
            <ListItem key={i} component={Link} to="/">
              <ListItemIcon><Icon/></ListItemIcon>
              <ListItemText>{label}</ListItemText>


            </ListItem>


          ))}
           <ListItem>
              <ListItemIcon>
                <ModeNight/>
                </ListItemIcon>
     <Switch onChange={()=>setMode(mode==="light"?"dark":"light")}>

     </Switch>


            </ListItem>

        </List>

     </Box>
 </Box>
  )
}

export default Sidebar