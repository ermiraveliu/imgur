import React, { createContext, useState } from "react";
import IPost from "../interfaces/IPost";
import { IExpandedPost, IPostDefault,  } from "../interfaces/IExpandedPost";

interface PostContextProps {
    post: IPost| IExpandedPost,
    upvoteBannerDisplay: string;
    downvoteBannerDisplay: string;
    favoriteBannerDisplay: string;
    setPost: (post: IExpandedPost|IPost) => void  
    setUpvoteBannerDisplay: (display: string) => void
    setDownvoteBannerDisplay: (display: string) => void
    setFavoriteBannerDisplay: (display: string) => void
 }

export const PostContext = createContext<PostContextProps>(
    {
    post:IPostDefault, 
    upvoteBannerDisplay:"hidden", 
    downvoteBannerDisplay:"hidden", 
    favoriteBannerDisplay:"hidden", 
    setPost: (post) => {}, 
    setUpvoteBannerDisplay: (display) => {},
    setDownvoteBannerDisplay: (display) => {},
    setFavoriteBannerDisplay: (display) => {},
});

interface PostContextProviderProps {
    children: React.ReactNode
}
 
const PostContextProvider: React.FC<PostContextProviderProps> = ({children}) => {
    const [post, setPost] = useState<IExpandedPost|IPost>(IPostDefault);
    const [upvoteBannerDisplay, setUpvoteBannerDisplay] = useState<string>("hidden");
    const [downvoteBannerDisplay, setDownvoteBannerDisplay] = useState<string>("hidden");
    const [favoriteBannerDisplay, setFavoriteBannerDisplay] = useState<string>("hidden");
    return ( 
        <PostContext.Provider 
          value = {{
            post, 
            setPost, 
            upvoteBannerDisplay, 
            setUpvoteBannerDisplay, 
            downvoteBannerDisplay, 
            setDownvoteBannerDisplay,
            favoriteBannerDisplay, 
            setFavoriteBannerDisplay
           }}>
            {children}
        </PostContext.Provider>
     );
}
 
export default PostContextProvider;