
import React,{useState,useEffect} from "react"
import {AppBar,Toolbar,Typography,Button,IconButton,Slide} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import "bootstrap/dist/css/bootstrap.css"


   

const GridComponent= ()=>{
    const [scrolling,setScrolling]=useState(false)
    const [scrollTop, setScrollTop]=useState(0)
   


    useEffect(()=>{
           function handleScroll(e){
        setScrollTop(e.target.documentElement.scrollTop)
        setScrolling(e.target.documentElement.scrollTop>scrollTop)
    }

  
        window.addEventListener('scroll',handleScroll)
        return ()=>{
            window.removeEventListener('scroll', handleScroll)
        }

    },[scrolling,scrollTop])

    useEffect(()=>{
       return  setScrolling((prev)=>prev!==scrolling)
    },[scrolling])
  


    return (
        <div   >
            <Slide in={!scrolling}>
         <AppBar position="fixed">
            <Toolbar>
                <IconButton
                color="inherit"
                aria-label="Menu"
                >
                    <MenuIcon/>
                </IconButton>
                <Typography 
                variant="title"
                color="inherit"
                >
TITLE
                </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>


         </AppBar>
          </Slide>
<ul className="my-10">
    {new Array(500).fill(null).map((v,i)=><li key={i}>{i}</li>)}
</ul>

           
        </div>
    )
}
export default GridComponent