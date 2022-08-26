import React,{useEffect,useState} from 'react'

import CourseCard from './CourseCard'
import {Stack,Card} from '@mui/material'
import axios from 'axios'
import {Link} from 'react-router-dom'
const TechStack = () => {
const[videos,setVideos]=useState([])
  useEffect(()=>{
const getVideos= async ()=>{
  try{
    const {data}= await axios.get('http://localhost:8800/videos')
    setVideos(data)

  }
  catch(e){
console.log(e)
  }
}
getVideos()

  },[])
  return (

   
<Stack direction='row' sx={{flexWrap:'wrap',margin:{xs:'10px',sm:'5vw'},marginTop:'5p'}} gap={5}>
{videos.map((video)=>(
  <CourseCard key={video.id} id={video.id} image={video.poster} name={video.name} duration={video.duration} description={video.description}/>


))}


</Stack>


 
          
  )
}

export default TechStack