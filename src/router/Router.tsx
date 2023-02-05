import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Gallery from "../pages/gallery";
import PostContextProvider from "../context/PostContext";
import User from "../pages/user";
import Comments from "../components/UserPageComponents/UserComments";
import About from "../components/UserPageComponents/UserAbout";
import UserPosts from "../components/UserPageComponents/UserPosts";


interface RouterProps {
    
}
 
const Router: React.FC<RouterProps> = () => {
    return ( 
        <BrowserRouter>
         <Routes>
            <Route index element={<Home/>}/>
            <Route path="/gallery/:id" element={<PostContextProvider><Gallery/></PostContextProvider>}/>
            <Route path="/tag/:id" element={<>Tag page</>}/>    

            <Route path="/user/:username" element={<User/>}>
               <Route index element={<UserPosts/>}/>
               <Route path="posts" element={<UserPosts/>}/>
               <Route path="comments" element={<Comments/>}/>
               <Route path="about" element={<About/>}/>
            </Route>

         </Routes>
        </BrowserRouter>
     );
}
 
export default Router;