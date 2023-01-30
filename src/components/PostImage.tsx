import { LazyLoadImage } from 'react-lazy-load-image-component';
import { IExpandedPost } from '../interfaces/IExpandedPost';
import { imageCalculations } from '../helpers';
import IPost from '../interfaces/IPost';

interface PostImageProps {
    post: IPost|IExpandedPost
}
 
const PostImage: React.FC<PostImageProps> = ({post}) => {

   let  [imageId, animated, height, width, objectFit, imageHeight] = imageCalculations(post);        
    let gradientStartColor = Math.floor(Math.random() * 6) + 1;
    return ( 
        <LazyLoadImage 
            className={`sm:w-[300px]`}
            key={post.id}
            src={`${imageId}`}
            placeholder={<div className={`sm:w-[300px] bg-gradient-to-b from-tagColor-${gradientStartColor} to-gray-800`} data-animated={animated} data-height={height} data-width={width} data-imageid = {imageId} data-objectFit = {objectFit}  style={ {height : `${imageHeight}px`}} ></div>}
        />
     );
}
 
export default PostImage;