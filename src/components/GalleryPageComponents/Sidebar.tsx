import { useEffect, useState } from "react";
import IPost from "../../interfaces/IPost";
import SidebarPost from "./SidebarPost";
import SidebarSkeleton from "./Skeletons/SidebarSkeleton";

interface SidebarProps {
    
}
 
const Sidebar: React.FC<SidebarProps> = () => {

  const [postsData, setPostsData] = useState<IPost[]>();
  const [posts, setPosts] = useState<JSX.Element[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  
  useEffect(() => { 
    setIsLoading(true);
    fetch("https://api.npoint.io/bc13239283496e6574a7")
    .then(res => res.json())
    .then(json => json.data)
    .then(data => {
     setPostsData(data)
    })

   },[])

   useEffect(()=> {
     if(postsData){
       const sidebarPosts = postsData.map(data => 
        {
         if(data.images){
            return  (  
         <SidebarPost   
          key={data.id}
          postId ={data.id}         
          title = {data.title}
          imageId={data.images[0].id}
           />)}
 
          return(
            <SidebarPost 
            key={data.id}
            postId ={data.id}         
            title = {data.title}
            imageId={data.id}
            />
          )
         }
        
        );
        setPosts(sidebarPosts);
       }
    setIsLoading(false);      

   }, [postsData])

   const element = isLoading? <SidebarSkeleton/> : posts;
    return ( 
        <div className="flex relative pb-36">
        <div className="sidebar sticky top-72 hidden h-[260px] flex-grow-0 flex-shrink-0 basis-[300px] lg:block lg:w-[300px]">
          <p className="text-white text-xs font-semibold tracking-wider uppercase">
            Newest in most viral
          </p>
          <div id="sidebar-posts" className="max-h-[300px] overflow-y-auto">
            {element}
          </div>
        </div>
        </div>
     );
}
 
export default Sidebar;