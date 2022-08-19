import React from 'react'
import {Box} from "@mui/material"

import Posts from "./Posts"

const Feed = () => {
  return (
     <Box sx={{marginLeft:"10px"}} flex={4} p={2}>
<Posts/>
<Posts/>
<Posts/>
<Posts/>
<Posts/>
<Posts/>
<Posts/>
     
     </Box>
  )
}

export default Feed