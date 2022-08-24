import React from 'react'

import CourseCard from './CourseCard'
import {Stack} from '@mui/material'

const TechStack = () => {
  return (

   
<Stack direction='row' sx={{flexWrap:'wrap',margin:{xs:'10px',sm:'5vw'},marginTop:'5p'}} gap={5}>
<CourseCard/>
<CourseCard/>
<CourseCard/>
<CourseCard/>
<CourseCard/>
<CourseCard/>
<CourseCard/>
<CourseCard/>
<CourseCard/>


</Stack>


 
          
  )
}

export default TechStack