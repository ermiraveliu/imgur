import {useEffect, useState } from "react";
import IComment from "../../interfaces/IComment";
import Comment from "./Comment";
interface CommentsProps {
    
}
 
const Comments: React.FC<CommentsProps> = () => {
    const [comments, setComments] = useState<IComment[]>([] as IComment[])
    // const {post} = useContext(PostContext);
    useEffect(()=> {
       const getComments = async () => {
        const res = await fetch("https://api.npoint.io/ea0dfdf982eb0af3376d");
        const resJson = await res.json();
        console.log(resJson);
        setComments(resJson)
       }
       getComments()
    }, [])
    return ( 
        <div id="comments">
           {comments.map(comment => 
            (<Comment comment={comment}/>))
           }
        </div>
     );
}
 
export default Comments;