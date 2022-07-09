import Homepage from "./components/HomepageStuff/Homepage"

import {BrowserRouter,Route, Routes} from "react-router-dom"
import Main from "./components/datasection/main";
function App(){
    return (
      <BrowserRouter>
        <Routes>

          <Route path = "*" element={<Homepage/>} />
          <Route path = "/main" element={<Main/>}/>
        </Routes>
      </BrowserRouter>
    );
}

export default App