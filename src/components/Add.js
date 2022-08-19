import React,{useState} from 'react'
import {Tooltip,Fab,Modal,Box,styled,Typography, Avatar,TextField,Stack,ButtonGroup,Button} from "@mui/material"

import AddIcon from "@mui/icons-material/Add"
import {VideoFile,PictureInPicture,PersonAdd,DateRange} from "@mui/icons-material"


const StyledModal=styled(Modal)({
display:"flex",
alignItems:"center",
justifyContent:"center",



})
const UserBox=styled(Box)({
display:"flex",
alignItems:"center",

gap:"10px",
marginBottom:"10px"


})
const Add = () => {
    const [open,setOpen]=useState(false)
    const handleClose=()=>{
        setOpen(false)
    }
  return (
 <>
 <Tooltip sx={{position:"fixed", bottom:20, left:{xs:"calc(50% - 25px)",md:30}}} onClick={()=>setOpen(true)}>
   <Fab color="primary" aria-label="add">
<AddIcon/>
   </Fab>

 </Tooltip>
 <StyledModal
 open={open}
 onClose={handleClose}
 aria-labelledby="modal-modal-title"
 aria-describedby="modal-modal-description"
 >
    <Box width={400} height={280} bgcolor={"background.default"} color={'text.primary'} p={3} borderRadius={5}>
  <Typography variant="h6"  color="gray" textAlign="center" id="modal-modal-title">
Create Post
  </Typography>
  <UserBox>
    <Avatar/>
    <Typography>John Doe</Typography>
  </UserBox>
  <TextField
  sx={{width:"100%"}}
  id="standard-multiline-static"
 
  multiline
  rows={3}
  placeholder="Whats on your mind"
  variant="standard"
  />

<Stack direction="row" gap={1} mt={2} mb={1}>
    <VideoFile/>
    <PictureInPicture/>
    <PersonAdd/>

</Stack>
<ButtonGroup variant="contained" mb={3}
fullWidth
>
    <Button>Post</Button>
<Button sx={{width:"100px"}}><DateRange/></Button>
</ButtonGroup>
    </Box>


 </StyledModal>
 </>
  )
}

export default Add