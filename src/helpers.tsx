import { IExpandedPost } from "./interfaces/IExpandedPost";
import IPost, { instanceOfIPost } from "./interfaces/IPost";

export const titleCalculations = (post:IPost|IExpandedPost) => {
    let titleLength, postHeight, aspectRatio, title = post.title;
    if(instanceOfIPost(post)){
      aspectRatio = post.images[0].height / post.images[0].width;
      postHeight = Math.floor((300 * aspectRatio) / 5);
    } else {    
      aspectRatio = post.height / post.width;
      postHeight = Math.floor((300 * aspectRatio) / 5);
    }
  
    if (title.length > 115) {
      title = post.title.substring(0, 112);
      title += "...";
    }
    if (title.length > 78) {
      postHeight += 25;
      titleLength = "extra-long-title";
    } else if (post.title.length > 39) {
      postHeight += 22;
      titleLength = "long-title";
    } else postHeight += 20;
   
    return [titleLength, postHeight ]
}

export const imageCalculations = (post: IPost|IExpandedPost) => {
    const [titleLength, postHeight] = titleCalculations(post);
    let aspectRatio, link = post.link, height, width, imageId, animated,  imageHeight = Number(postHeight) * 5;;
    if(instanceOfIPost(post)){
        height = post.images[0].height;
        width = post.images[0].width;
        animated = post.images[0].animated;
        imageId =  `https://i.imgur.com/${post.images[0].id}_d.webp?maxwidth=760&fidelity=grand}`;
        aspectRatio = post.images[0].height / post.images[0].width;
    } else {
      height = post.height;
      width = post.width;
      animated = post.animated;
      imageId = link.slice(link.length - 3) === "mp4" ? link.slice(0,link.length - 3).concat("jpg") : link
      aspectRatio = post.height / post.width;
    }
    let objectFit = aspectRatio < 1 ? "object-fill" : "object-cover";
    return [imageId, animated, objectFit, imageHeight, titleLength, postHeight ]
}