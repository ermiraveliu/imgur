import { useContext, useEffect, useState } from "react";
import Post from "../components/Post";
import { AutoplayContext } from "../context/AutoplayContext";
import { IExpandedPost } from "../interfaces/IExpandedPost";
import IPost from "../interfaces/IPost";
interface PostsProps {
  apiEndpoint: string
}

const Posts: React.FC<PostsProps> = ({apiEndpoint}) => {
  
  const [postsData, setPostsData] = useState<(IPost|IExpandedPost)[]>();
  const [posts, setPosts] = useState<JSX.Element[]>();
  const {autoplay, setAutoplay} = useContext(AutoplayContext);

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
        const Posts = postsData.map(data => 
        <Post key={data.id} post = {data}/>);
         setPosts(Posts);
        } 
    }, [postsData, autoplay])

    return ( 
      <>
        <button onClick={() => setAutoplay(!autoplay)} className="text-white">Change autoplay</button>
        <div
          className="dense-grid gallery relative overflow-hidden"
          id="posts-container"
        >{posts}</div>
      </>
    );
}
 
export default Posts;