import { Link } from "react-router-dom";
import { IExpandedPost } from "../interfaces/IExpandedPost";
import IPost, {instanceOfIPost } from "../interfaces/IPost";
import PostDescription from "./PostDescription";

interface PostSkeletonProps {    
  post: IPost | IExpandedPost  
}
const PostSkeleton: React.FC<PostSkeletonProps> = ({post}) => {
    
  let aspectRatio, titleLength, imageHeight, postHeight = 0 ;
  let {title, vote, comment_count, views } = post
  let height = instanceOfIPost(post) ? post.images[0].height: post.height
  let imageId = instanceOfIPost(post) ? post.images[0].id: post.height
  let width = instanceOfIPost(post) ? post.images[0].width: post.width
  let animated = instanceOfIPost(post) ? post.images[0].animated: post.animated

  if(instanceOfIPost(post)){
    aspectRatio = post.images[0].height / post.images[0].width;
    postHeight = Math.floor((300 * aspectRatio) / 5);
     imageHeight = postHeight * 5;
  } else {
    aspectRatio = post.height / post.width;
    postHeight = Math.floor((300 * aspectRatio) / 5);
     imageHeight = postHeight * 5;
  }

  if (post.title.length > 115) {
    post.title = post.title.substring(0, 112);
    post.title += "...";
  }
  if (post.title.length > 78) {
    postHeight += 25;
    titleLength = "extra-long-title";
  } else if (post.title.length > 39) {
    postHeight += 22;
    titleLength = "long-title";
  } else postHeight += 20;

    //Set the images' object fit property based on aspect ratio
    let objectFit;
    if (aspectRatio < 1) {
      objectFit = "object-fill";
    } else {
      objectFit = "object-cover";
    }

    //Randomly generate a number in range [1,6]
    let gradientStartColor = Math.floor(Math.random() * 6) + 1;
    return (
        <Link to={`/gallery/${post.id}`} onClick= {() =>  window.scrollTo(0, 0)} style={{gridRow: `span ${postHeight}`}}>
          <div className={`post ${titleLength}  text-white rounded-sm overflow-hidden sm:w-[300px] relative image-container `}  id= {post.id}>  
            <div className={`sm:w-[300px] bg-gradient-to-b from-tagColor-${gradientStartColor} to-gray-800`} data-animated={animated} data-height={height} data-width={width} data-imageid = {imageId} data-objectFit = {objectFit}  style={ {height : `${imageHeight}px`}} ></div>
            <PostDescription title={title} votes={vote} comment_count={comment_count} views={views}/>
      </div>
     </Link>
    );
}
 
export default PostSkeleton;