import { LazyLoadImage, LazyLoadComponent } from 'react-lazy-load-image-component';
import { IExpandedPost } from '../interfaces/IExpandedPost';
import { imageCalculations } from '../helpers';
import IPost, { instanceOfIPost } from '../interfaces/IPost';

interface PostImageProps {
    post: IPost|IExpandedPost
}
 
const PostImage: React.FC<PostImageProps> = ({post}) => {

   let  [imageId, animated, height, width, objectFit, imageHeight] = imageCalculations(post);        
    let gradientStartColor = Math.floor(Math.random() * 6) + 1;
    let imageSkeleton = (
        <div className={`sm:w-[300px] bg-gradient-to-b from-tagColor-${gradientStartColor} to-gray-800`} data-animated={animated} data-height={height} data-width={width} data-imageid = {imageId} data-objectFit = {objectFit}  style={ {height : `${imageHeight}px`}} ></div>
    )
    let Image = (
        <LazyLoadImage 
        className={`sm:w-[300px]`}
        key={post.id}
        src={`${imageId}`}
        placeholder={imageSkeleton}
    />
    );
   
    let videoLink = instanceOfIPost(post) ? `https://i.imgur.com/${post.images[0].id}.mp4` : post.link;
    let Video = (
        <LazyLoadComponent
        placeholder={imageSkeleton}>
        <video id="image" className={`image ${objectFit} w-full sm:w-[300px]`}  data-height={`${height}`} data-width={`${width}`} autoPlay loop muted>
       <source src={`${videoLink}`} type="video/mp4"/>
       </video>
        </LazyLoadComponent>
    );

    let Post = animated ? Video : Image; 
    return (Post);
}
 
export default PostImage;