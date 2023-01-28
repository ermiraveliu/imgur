import { createContext, useState } from "react";
import IPost, {IPostDefault} from "../interfaces/IPost";

export const PostContext = createContext<any>(IPostDefault);

interface PostContextProps {
    children: React.ReactNode
}
 
export const PostContextProvider: React.FC<PostContextProps> = ({children}) => {
    const [post, setPost] = useState<IPost>(IPostDefault);
    return ( 
        <PostContext.Provider value = {{post, setPost}}>
            {children}
        </PostContext.Provider>
     );
}
 
export default PostContextProvider;