import {Button} from "@mui/material"
import {DeleteIcon,SendIcon} from "@mui/icons-material"

function Buttons(){
    return <>

<Button variant="text">Text</Button>

<Button variant="contained">Contained</Button>

<Button variant="outlined">outlined</Button>
<Button disabled variant="contained">Disabled Contained</Button>
<Button disabled variant="text">Disabled Text</Button>
<Button disabled variant="outlined">Disabled Outlined</Button>
<Button variant="outlined" color="error">Error Contained</Button>
<Button  variant="contained" color="success">Success</Button>
<Button  variant="contained" color="secondary">Secondary</Button>
<Button size="small" variant="contained">Small</Button>
<Button size="medium" variant="contained">medium</Button>
<Button size="large" variant="contained">large</Button>
<Button href="#" variant="text">link</Button>

<Button variant="outlined" startIcon={

    <DeleteIcon/>
}>Delete</Button>

<Button variant="contained" endIcon={

    <SendIcon/>
}>Send</Button>





    </>
}
export default Buttons 