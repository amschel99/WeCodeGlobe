
//import Navbar1 from "./components/Navbar-slide"
import Navbar2 from "./components/Navbar-menu"
import "bootstrap/dist/css/bootstrap.css"
import {Route, Routes} from "react-router-dom"
function App() {
  return (

    
<Routes>

  <Route path="/" element={<Navbar2 title="HOME"/>}/>
  
  <Route path="profile" element={<Navbar2 title="PROFILE"/>}/>
  
  <Route path="messages" element={<Navbar2 title="messages"/>}/>
</Routes>
  );
}

export default App;
