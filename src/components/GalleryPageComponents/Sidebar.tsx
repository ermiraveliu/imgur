import { useEffect, useState } from "react";
import { IExpandedPost } from "../../interfaces/IExpandedPost";
import IPost, { instanceOfIPost } from "../../interfaces/IPost";
import SidebarPost from "./SidebarPost";
import SidebarSkeleton from "./Skeletons/SidebarSkeleton";

interface SidebarProps {
    
}
 
const Sidebar: React.FC<SidebarProps> = () => {

  const [posts, setPosts] = useState<JSX.Element[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  
  useEffect(() => { 
    setIsLoading(true);

    const getSidebarPosts = async() => {
      const res =  await fetch("https://api.npoint.io/bc13239283496e6574a7");
      const json = await res.json();
      const data: (IPost|IExpandedPost)[] = json.data;
      const sidebarPosts = data.map((post) => 
        {
         if(instanceOfIPost(post)){
            return  (  
              <SidebarPost   
                key={post.id}
                postId ={post.id}         
                title = {post.title}
                imageId={post.images[0].id}
                />
          )}
          return(
            <SidebarPost 
            key={post.id}
            postId ={post.id}         
            title = {post.title}
            imageId={post.id}
            />
          )
         }
        
        );
        setPosts(sidebarPosts);
        setIsLoading(false);
    }
       getSidebarPosts();
   },[])

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