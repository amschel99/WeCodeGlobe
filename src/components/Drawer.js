import React from 'react'
import {ListItem,ListItemIcon,ListItemText,Drawer,List,ListSubheader} from '@mui/material'
import {Code,GitHub,Javascript, CodeSharp as Reactjs,Html,Book as Blog,CardMembership as Certifications,Dashboard} from "@mui/icons-material"
const DrawerComponent = () => {

    const [items]=React.useState({
      learningPaths:[
        {label:"Frontend",Icon:Reactjs},
          {label:"Backend",Icon:Code},
            {label:"Fullstack",Icon:Javascript},
              {label:"Version control",Icon:GitHub}
      ],
      PlayGrounds:[
        {label:"Javascript playground",Icon:Javascript},
          {label:"Html and CSS playground",Icon:Html},
            {label:"React playground",Icon:Reactjs},
              {label:"Node js playground",Icon:Code}

      ],
      Forum:[
        {label:"Frontend Forum",Icon:Javascript},
          {label:"Backend Forum",Icon:Code},
            {label:"Fullstack forum",Icon:Code},
            

      ],
      Blog:[
             {label:"Coders blog",Icon:Blog}
    
  
      ],
      Certifications:[
           {label:"Frontend certifications",Icon:Certifications},
                    {label:"Backend",Icon:Certifications},
                             {label:"Other certifications",Icon:Certifications}

      ],
   Dashboard:[
           {label:"My Dashboard",Icon:Dashboard},
             

      ],
      
      


    })

    const ListItems=({items})=>{
        return <>
        {items.map(({label,Icon},i)=>{
            return <ListItem button key={i}>

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
<ListSubheader>Learning Paths</ListSubheader>
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