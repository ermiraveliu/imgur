import { useContext, useEffect, useState } from "react";
import Post from "../components/Post";
import { AutoplayContext } from "../context/AutoplayContext";
import { LayoutContext } from "../context/LayoutContext";
import { IExpandedPost } from "../interfaces/IExpandedPost";
import IPost from "../interfaces/IPost";
interface PostsProps {
  apiEndpoint: string
}

const Posts: React.FC<PostsProps> = ({apiEndpoint}) => {
  
  const [posts, setPosts] = useState<JSX.Element[]>();
  const {autoplay, setAutoplay} = useContext(AutoplayContext);
  const {layout, setLayout} = useContext(LayoutContext);

  useEffect(() => {  
     const getPosts = async () => {
        const res = await  fetch(apiEndpoint);
        const json = await res.json();
        const data:(IPost|IExpandedPost)[] = json.data;
        const Posts = data.map(post => 
          <Post key={post.id} post = {post}/>);
           setPosts(Posts);
          }
      getPosts();
    },[apiEndpoint])

    return ( 
      <div className="">
        <nav className="w-full px-32 flex justify-end">
          <button onClick={() => setAutoplay(!autoplay)} className="text-white p-4">Change autoplay</button>
          <button onClick={() => setLayout( layout === "uniform" ? "waterfall" : "uniform")} className="p-4 text-white">Change layout</button>
        </nav>
        <div
          className={`${layout === "uniform" ? "flex-container" : "dense-grid" } gallery relative overflow-hidden`}
          id="posts-container"
        >{posts}</div>
      </div>
    );
}
 
export default Posts;