import React from 'react'
import {Link} from 'react-router-dom'
import {ListItem,ListItemIcon,ListItemText,Drawer,List,ListSubheader} from '@mui/material'
import {Code,GitHub,Javascript, CodeSharp as Reactjs,Html,Book as Blog,CardMembership as Certifications,Dashboard} from "@mui/icons-material"
const DrawerComponent = ({open,setOpen}) => {


    const [items]=React.useState({
      learningPaths:[
        {label:"Frontend",Icon:Reactjs,path:'user'},
          {label:"Backend",Icon:Code,path:'user'},
            {label:"Fullstack",Icon:Javascript,path:'user'},
              {label:"Version control",Icon:GitHub,path:'user'}
      ],
      PlayGrounds:[
        {label:"Javascript playground",Icon:Javascript,path:'user'},
          {label:"Html and CSS playground",Icon:Html,path:'user'},
            {label:"React playground",Icon:Reactjs,path:'user'},
              {label:"Node js playground",Icon:Code,path:'user'}

      ],
      Forum:[
        {label:"Frontend Forum",Icon:Javascript,path:'user'},
          {label:"Backend Forum",Icon:Code,path:'user'},
            {label:"Fullstack forum",Icon:Code,path:'user'},
            

      ],
      Blog:[
             {label:"Coders blog",Icon:Blog,path:'user'}
    
  
      ],
      Certifications:[
           {label:"Frontend certifications",Icon:Certifications,path:'user'},
                    {label:"Backend",Icon:Certifications},
                             {label:"Other certifications",Icon:Certifications,path:'user'}

      ],
   Dashboard:[
           {label:"My Dashboard",Icon:Dashboard,path:'user'},
             

      ],
      
      


    })

    const ListItems=({items})=>{
        return <>



        
        {items.map(({label,Icon,path},i)=>{
            return <ListItem component={Link} to={`/${path}`} key={i}>

<ListItemIcon>
    <Icon/>
</ListItemIcon>
<ListItemText>{label}</ListItemText>

            </ListItem>
        })}
        </>
    }
  return (
    <Drawer open={open} onClose={()=>setOpen(false)} variant='temporary' sx={{'z-index':5,display:{xs:'block',sm:'none'} }} >
<List sx={{marginTop:7}}>


  
<ListSubheader>learning Paths</ListSubheader>
<ListItems items={items.learningPaths}/>
<ListSubheader>Playgrounds</ListSubheader>
<ListItems items={items.PlayGrounds}/>
<ListSubheader>Forum</ListSubheader>
<ListItems items={items.Forum}/>
<ListSubheader>Blog</ListSubheader>
<ListItems items={items.Blog}/>
<ListSubheader>Certifications</ListSubheader>
<ListItems items={items.Certifications}/>
<ListSubheader>Dashboard</ListSubheader>
<ListItems items={items.Dashboard}/>
</List>
    </Drawer>
  )
}

export default DrawerComponent