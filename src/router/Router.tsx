import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Gallery from "../pages/gallery";


interface RouterProps {
    
}
 
const Router: React.FC<RouterProps> = () => {
    return ( 
        <BrowserRouter>
         <Routes>
            <Route index element={<Home/>}/>
            <Route path="/gallery/:id" element={<Gallery/>}/>
            <Route path="/tag/:id" element={<>Tag page</>}/>            
         </Routes>
        </BrowserRouter>
     );
}
 
export default Router;