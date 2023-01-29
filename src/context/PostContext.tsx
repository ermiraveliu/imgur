import { createContext, useState } from "react";
import IPost from "../interfaces/IPost";
import { IExpandedPost, IPostDefault,  } from "../interfaces/IExpandedPost";

interface PostContextProps {
    post: IPost| IExpandedPost,
    setPost: (post: IExpandedPost|IPost) => void  
 }

export const PostContext = createContext<PostContextProps>({post:IPostDefault, setPost: (post) => {}});

interface PostContextProviderProps {
    children: React.ReactNode
}
 
export const PostContextProvider: React.FC<PostContextProviderProps> = ({children}) => {
    const [post, setPost] = useState<IExpandedPost|IPost>(IPostDefault);
    return ( 
        <PostContext.Provider value = {{post, setPost}}>
            {children}
        </PostContext.Provider>
     );
}
 
export default PostContextProvider;