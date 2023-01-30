import { Link } from "react-router-dom";
import { IExpandedPost } from "../interfaces/IExpandedPost";
import IPost from "../interfaces/IPost";
import PostDescription from "./PostDescription";
import PostImage from "./PostImage";
import {titleCalculations } from "../helpers";

interface PostSkeletonProps {    
  post: IPost | IExpandedPost  
}
const PostSkeleton: React.FC<PostSkeletonProps> = ({post}) => {
    
  let {title, ups, comment_count, views } = post
  const [titleLength, postHeight] = titleCalculations(post);

  //Randomly generate a number in range [1,6]
    return (
        <Link to={`/gallery/${post.id}`} onClick= {() =>  window.scrollTo(0, 0)} style={{gridRow: `span ${postHeight}`}}>
          <div className={`post ${titleLength}  text-white rounded-sm overflow-hidden sm:w-[300px] relative image-container `}  id= {post.id}>  
            <PostImage post={post}/>
            <PostDescription title={title} votes={ups} comment_count={comment_count} views={views}/>
      </div>
     </Link>
    );
}
 
export default PostSkeleton;