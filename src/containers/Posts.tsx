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
      <div className="relative top-[268px]">
        <nav className="flex justify-end px-2 w-10/12 m-auto py-4 sticky top-2 z-20">
          <div className="w-auto flex gap-2 items-center">
            <button onClick={() => setAutoplay(!autoplay)} className="">
              <span
                className="play material-symbols-rounded text-gray-200 hover:text-white text-2xl hidden relative"
                id="enable-autoplay-btn"
              >
                smart_display
              </span>
            </button>
            <button onClick={() => setLayout(layout === "uniform" ? "waterfall" : "uniform")} className="">
              <span className="uniform material-symbols-rounded text-gray-200 hover:text-white text-2xl relative">
                  grid_view
              </span>
            </button>
          </div>
        </nav>
        <div
          className={`${layout === "uniform" ? "flex-container" : "dense-grid" } gallery relative overflow-hidden`}
          id="posts-container"
        >{posts}</div>
      </div>
    );
}
 
export default Posts;