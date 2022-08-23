import React from 'react'
import {Link} from 'react-router-dom'
import {ListItem,ListItemIcon,ListItemText,Drawer,List,ListSubheader} from '@mui/material'
import {Code,GitHub,Javascript, CodeSharp as Reactjs,Html,Book as Blog,CardMembership as Certifications,Dashboard} from "@mui/icons-material"
const DrawerComponent = () => {

    const [items]=React.useState({
      learningPaths:[
        {label:"Frontend",Icon:Reactjs,path:'frontend'},
          {label:"Backend",Icon:Code,path:'backend'},
            {label:"Fullstack",Icon:Javascript,path:'fullstack'},
              {label:"Version control",Icon:GitHub,path:'git'}
      ],
      PlayGrounds:[
        {label:"Javascript playground",Icon:Javascript,path:'jsPlayground'},
          {label:"Html and CSS playground",Icon:Html,path:'htmlPlayground'},
            {label:"React playground",Icon:Reactjs,path:'reactPlayground'},
              {label:"Node js playground",Icon:Code,path:'nodePlayground'}

      ],
      Forum:[
        {label:"Frontend Forum",Icon:Javascript,path:'frontendForum'},
          {label:"Backend Forum",Icon:Code,path:'backendForum'},
            {label:"Fullstack forum",Icon:Code,path:'fullstackForum'},
            

      ],
      Blog:[
             {label:"Coders blog",Icon:Blog,path:'blog'}
    
  
      ],
      Certifications:[
           {label:"Frontend certifications",Icon:Certifications,path:'frontendCertification'},
                    {label:"Backend",Icon:Certifications,path:'backendCertification'},
                             {label:"Other certifications",Icon:Certifications,path:'otherCertifications'}

      ],
   Dashboard:[
           {label:"My Dashboard",Icon:Dashboard,path:'dashboard'},
             

      ],
      
      


    })

    const ListItems=({items})=>{
        return <>
        {items.map(({label,Icon,path},i)=>{
            return <ListItem component={Link} to={`${path}`} key={i}>

<ListItemIcon>
    <Icon/>
</ListItemIcon>
<ListItemText>{label}</ListItemText>

            </ListItem>
        })}
        </>
    }
  return (
    <Drawer variant='permanent' sx={{'z-index':5, display:{xs:'none',sm:'block'}}} >
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