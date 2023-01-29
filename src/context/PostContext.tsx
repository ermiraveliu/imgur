import { createContext, useState } from "react";
import IPost, {IPostDefault} from "../interfaces/IPost";

interface PostContextProps {
    post: IPost,
    setPost: (post: IPost) => void  
 }

export const PostContext = createContext<PostContextProps>({post:IPostDefault, setPost: (post) => {}});

interface PostContextProviderProps {
    children: React.ReactNode
}
 
export const PostContextProvider: React.FC<PostContextProviderProps> = ({children}) => {
    const [post, setPost] = useState<IPost>(IPostDefault);
    return ( 
        <PostContext.Provider value = {{post, setPost}}>
            {children}
        </PostContext.Provider>
     );
}
 
export default PostContextProvider;