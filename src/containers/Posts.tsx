import { useEffect, useState } from "react";
import { addGalleryImages } from "../addGalleryImages";
import PostSkeleton from "../components/PostSkeleton";

interface PostsProps {
    apiEndpoint: string
}

interface IPost {
  id:string,
  images: {
    height: number, 
    width: number,
    animated: boolean,
    id: string
  }[],
   title: string, 
   ups: number, 
   comment_count: number,
    views:number,
}

const Posts: React.FC<PostsProps> = ({apiEndpoint}) => {

  const [postsData, setPostsData] = useState<IPost[]>(
    
  );

  const [postsSkeletons, setPostsSkeletons] = useState<JSX.Element[]>();

  useEffect(() => {   
     fetch(apiEndpoint)
     .then(res => res.json())
     .then(json => json.data)
     .then(data => {
      console.log(data)
      setPostsData(data)
     })
    }, [])

    useEffect(()=> {
      if(postsData){
        const PostSkeletons = postsData.map(data => 
         {
          if(data.images){
             return  (  
          <PostSkeleton            
           id={data.id}
           height={data.images[0].height}
           width = {data.images[0].width}
           title = {data.title}
           votes = {data.ups}
           comment_count = {data.comment_count}
           views = {data.views}
           animated = {data.images[0].animated}
           imageId={data.images[0].id}
           count={1} />)}
  
           return(
             <PostSkeleton            
              id={data.id}
              height={60}
              width = {90}
              title = {data.title}
              votes = {data.ups}
              comment_count = {data.comment_count}
              views = {data.views}
              animated = {false}
              imageId={"diWC0mU"}
              count={1} />
           )
          }
         
         );
         setPostsSkeletons(PostSkeletons);
        } 

    }, [postsData])
    
    return ( 
        <div
        className="dense-grid gallery relative overflow-hidde"
        id="posts-container"
      >{postsSkeletons}</div>
    );
}
 
export default Posts;