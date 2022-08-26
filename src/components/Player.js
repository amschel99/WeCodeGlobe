import axios from 'axios'
import React,{useState,useEffect} from 'react'
import {Card,CardMedia,CardActionArea,CardActions,CardContent,Button,Typography} from '@mui/material'
import {useParams} from 'react-router-dom'
const Player = ({props}) => {
    const{id}=useParams()
    
    const[videoData,setVideoData]=useState({})
    useEffect(()=>{
        const getVideo=async()=>{
            const {data}= await axios.get(`http://localhost:8800/videos/${id}/data`)
            setVideoData(data)
        }
        getVideo()
    },[])
  return (
     <Card sx={{width:{xs:'100vw',sm:'100vw',md:'100vw'} }}>
     
      <CardContent>
   <video sx={{width:'100vw'}} controls muted autoplay>
<source src={`http://localhost:8800/videos/${id}`} type='video/mp4'>
</source>
   </video>
      </CardContent>
      <CardActions>
       
      </CardActions>
    </Card>
  
  )
}

export default Player