import React,{useState,Fragment} from "react"
import {AppBar,Toolbar,Typography,Button,IconButton,MenuItem,Menu} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import {Link} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.css"


const Navbar2= ({title})=>{
    const [anchor,setAnchor]=useState(null)
    function closeMenu(){
        setAnchor(null)
    }
    const RightButton=()=><Button color="inherit">Login</Button>
    const MenuItems= ()=>(
<Fragment>

    <MenuItem  component={Link} to="/">Home</MenuItem>
    
    <MenuItem component={Link} to="/profile">Profile</MenuItem>

    
    <MenuItem component={Link} to="/messages">Messages</MenuItem>
</Fragment>

    )
    return (
        <Fragment>
<AppBar >
            <Toolbar>
                <IconButton
                color="inherit"
                aria-label="Menu"
                onClick={(e)=>{setAnchor(e.currentTarget)
                
                console.log(e.currentTarget)
                }}
                >
                    <MenuIcon/>
                </IconButton>
                <Menu
                
                anchorEl={anchor}
                open={Boolean(anchor)}
                onClose={closeMenu}
                >
                    <MenuItems closeMenu={closeMenu}/>
                    
                </Menu>
                <Typography 
                variant="title"
                color="inherit"
                >
{title}
                </Typography>
                <RightButton/>
            </Toolbar>


         </AppBar>

        </Fragment>
    )
}
export default Navbar2;