import React,{useState} from 'react'
import {AppBar,styled,Toolbar,Typography,Box, InputBase,Badge,Avatar, MenuItem,Menu} from "@mui/material"
import {BookOnline,Message,Notifications} from "@mui/icons-material"


const StyledToolbar=styled(Toolbar)(
    {
        display:"flex",
justifyContent:"space-between"
    }
)

const Search= styled("div")(({theme})=>(

  {backgroundColor:"white",
padding:'0 10px',
borderRadius:theme.shape.borderRadius,
width:'40%'

  }

))
const Icons= styled(Box)(({theme})=>(

  {display:"none", gap:"20px",alignItems:"center",
  [theme.breakpoints.up("sm")]:{
    display:'flex' 
  }
}

))
const UserBox= styled(Box)(({theme})=>(

  {display:"flex", gap:"10px",alignItems:"center",[theme.breakpoints.up("sm")]:{
    display:'none' 
  }}

))

const Navbar = () => {

  const [anchor,setAnchor]=useState(null)
  const closeMenu=()=>{
    setAnchor(null)
  }
  const MenuItems=()=>{
    return <>
    <MenuItem>Profile</MenuItem>
    <MenuItem>My Account</MenuItem>
    <MenuItem>Logout</MenuItem>
    </>
  }

  return (
    <AppBar sx={{"z-index":10}} position="sticky">
        <StyledToolbar>
            <Typography variant="h6" sx={{display:{xs:"none",sm:"block"}}}>TECHLIFY</Typography>
            <BookOnline sx={{display:{xs:"block",sm:"none"}}}/>
            <Search  bgcolor={"background.default"} color={"text.primary"}>
           
 <InputBase sx={{width:"100%",color:"dodgerblue"}}  placeholder='Search...' aria-placeholder='search'/>
              
              </Search>
             
            <Icons>

              <Badge badgeContent={3} color="error">
<Message/>
              </Badge>
              
              <Badge badgeContent={6} color="error">
<Notifications/>
              </Badge>
              <Avatar sx={{width:"30px",height:"30px"}}
              onClick={(e)=>setAnchor(e.currentTarget)}
              />
            </Icons>
            <UserBox>
              <Avatar sx={{width:"30px",height:"30px"}}
              onClick={(e)=>setAnchor(e.currentTarget)}
              />
              <Menu
              anchorEL={anchor}
              open={Boolean(anchor)}
              onClose={closeMenu}
              anchorOrigin={
                {
                  vertical:"top",
                  horizontal:'right'
                }
              }
              >
                <MenuItems closeMenu={closeMenu}/>
              </Menu>
              <Typography>John Doe</Typography>
            </UserBox>
         
        </StyledToolbar>

    </AppBar>
   
  )
}

export default Navbar