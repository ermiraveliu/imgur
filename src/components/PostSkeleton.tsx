import { Link } from "react-router-dom";
import PostDescription from "./PostDescription";

interface PostSkeletonProps {    
        id: string,
        height: number,
        width: number,
        title: string,
        votes: number,
        comment_count: number,
        views: number,
        animated: boolean,
        imageId: string,
        count:number   
}
const PostSkeleton: React.FC<PostSkeletonProps> = ({  id,
    height,
    width,
    title,
    votes,
    comment_count,
    views,
    animated,
    imageId,
    count}) => {
    // const [gradientStartColor, setGradientStartColor] =useState(6);
    const aspectRatio = height / width;
    let postHeight = Math.floor((300 * aspectRatio) / 5);
    let imageHeight = postHeight * 5;
    let titleLength;
    if (title.length > 115) {
      title = title.substring(0, 112);
      title += "...";
    }
    if (title.length > 78) {
      postHeight += 25;
      titleLength = "extra-long-title";
    } else if (title.length > 39) {
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
        <Link to={`/gallery/${id}`} key={id} style={{gridRow: `span ${postHeight}`}}>
          <div className={`post ${titleLength} text-white rounded-sm overflow-hidden sm:w-[300px] relative image-container `} data-count= {count} id= {id}>  
            <div className={`sm:w-[300px] bg-gradient-to-b from-tagColor-${gradientStartColor} to-gray-800`} data-animated={animated} data-height={height} data-width={width} data-imageid = {imageId} data-objectFit = {objectFit}  style={ {height : `${imageHeight}px`}} ></div>
            <PostDescription title={title} votes={votes} comment_count={comment_count} views={views}/>
      </div>
     </Link>
    );
}
 
export default PostSkeleton;