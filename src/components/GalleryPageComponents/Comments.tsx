import {useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import IComment from "../../interfaces/IComment";
import Comment from "./Comment";
interface CommentsProps {
    
}
 
const Comments: React.FC<CommentsProps> = () => {
    const [comments, setComments] = useState<IComment[]>([] as IComment[])
    // const {post} = useContext(PostContext);
     const endpoints = [
      {
      postId: "6rXPASw",
      api: "https://api.npoint.io/ea0dfdf982eb0af3376d"
      },
      {
         postId: "HnDIHVv",
         api: "https://api.npoint.io/93795303798c52950840"
      },
      {
         postId: "Ac7P2Jz",
         api: "https://api.npoint.io/50d26d06a80889d6d9aa"
      },
   ]
   let post = useParams();
   let postId = post.id
   let en:string = "" ;
   endpoints.forEach(endpoint => { 
      if(endpoint.postId === postId){
         en = endpoint.api
      }
      }
   )

   useEffect(()=> {
       const getComments = async () => {
console.log(en, "fdghjkljvcgfhjioigcfvhjpigcb vhjiphvcg");
        const res = await fetch(en);
        
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