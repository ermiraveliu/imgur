import { useEffect, useState } from "react";
import PostSkeleton from "../components/PostSkeleton";
import { IExpandedPost } from "../interfaces/IExpandedPost";
import IPost from "../interfaces/IPost";
interface PostsProps {
    apiEndpoint: string
}


const Posts: React.FC<PostsProps> = ({apiEndpoint}) => {

  const [postsData, setPostsData] = useState<(IPost|IExpandedPost)[]>();
  const [postsSkeletons, setPostsSkeletons] = useState<JSX.Element[]>();

  useEffect(() => {   
     fetch(apiEndpoint)
     .then(res => res.json())
     .then(json => json.data)
     .then(data => {
      setPostsData(data)
     })
    },[apiEndpoint])

    useEffect(()=> {
      if(postsData){
        const PostSkeletons = postsData.map(data => 
         {
             return  (  
          <PostSkeleton   
           key={data.id}         
           post = {data}/>
             )
          
          }
         
         );
         setPostsSkeletons(PostSkeletons);
        } 

    }, [postsData])
    
    return ( 
        <div
        className="dense-grid gallery relative overflow-hidden"
        id="posts-container"
      >{postsSkeletons}</div>
    );
}
 
export default Posts;