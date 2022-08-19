
import {useState} from "react"
import "bootstrap/dist/css/bootstrap.css"
import {Box, Stack} from "@mui/material"
import Sidebar from "./components/Sidebar"
import Rightbar from "./components/Rightbar"
import Navbar from "./components/Navbar"
import Feed from "./components/Feed"
import Add from "./components/Add"

import {createTheme,ThemeProvider} from "@mui/material"
function App() {
  const [mode,setMode]=useState("light")
  const darkMode=createTheme({
    palette:{
      mode:mode
    }
  })
  return (
    <ThemeProvider theme={darkMode}>
<Box bgcolor={"background.default"} color={'text.primary'}>
  {/*navbar there */}
  <Navbar/>
<Stack direction="row" spacing={2} p={2}>
  <Sidebar setMode={setMode} mode={mode}/>
  <Feed/>
  <Rightbar/>
  

</Stack>

<Add/>

</Box>
</ThemeProvider>
 
  );
}

export default App;
