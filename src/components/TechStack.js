import { Box } from '@mui/material'
import React from 'react'
import CardComponent from './Card'

const TechStack = () => {
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 5, marginLeft: {xs: 0, sm: "30px"}}}>
      <CardComponent/>
      <CardComponent/>
      <CardComponent/>
      <CardComponent/>
      <CardComponent/>
      <CardComponent/>
    </Box>
  )
}

export default TechStack