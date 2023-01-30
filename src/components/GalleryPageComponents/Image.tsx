import { useContext } from "react";
import { PostContext } from "../../context/PostContext";
import {instanceOfIPost} from "../../interfaces/IPost";

interface ImageProps {
    
}

const Image: React.FC<ImageProps> = () => {

    const {post} = useContext(PostContext);
    let image;
    let description : null|string = null;

    if(instanceOfIPost(post)){
        description = post.images[0].description;
        if(!post.images[0].animated){
        console.log("image")
          image =( <img src={post.images[0].link} className="mx-auto" alt=""/>)
       } else {
          image = (
          <video className="mx-auto max-h-[80vh]" autoPlay loop muted controls>
          <source src={post.images[0].link} type="video/mp4" />
          </video>
          )
       }
    } else {
        description = post.description;
        if(!post.animated){
        console.log("image")
          image =( <img src={post.link} className="mx-auto" alt=""/>)
       } else {
          image = (
          <video className="mx-auto max-h-[80vh]" autoPlay loop muted controls>
          <source src={post.link} type="video/mp4" />
          </video>
          )
       }
    }

    return ( 
        <>
        <div id = "images">
            <div id="d-0">
            <div className="bg-[rgba(0,0,0,.1)] my-3" id="image-0">
                {image}
            </div>
            <div className="p-4 hidden sm:block text-white text-sm tracking-wider break-all" id="description-0">{description}</div>
            </div>
       </div>
       <div className="sm:hidden text-xs font-medium p-4 flex gap-1">
            <div className="text-gray-200 views">{post.views} views</div>
        </div>
        </>
     );
}
 
export default Image;