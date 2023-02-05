// import { useEffect, useState } from "react";
// import UserCommentsSkeleton, { UserCommentsSkeletonProps } from "./UserCommentsSkeleton";
// import UserCommentsSkeletonProps from "./UserCommentsSkeleton";

interface CommentsProps {
    
}
 
const Comments: React.FC<CommentsProps> = () => {
    
    // const [comments, setComments] = useState<UserCommentsSkeletonProps[]>()

    // useEffect(()=>{
    //     fetch("https://api.npoint.io/2da4f077d06b9a86d910")
    //         .then(res => res.json())
    //         .then(json => setComments(json))
    //         // .then(data => console.log(data))
    // },[])

    
    // useEffect(()=> {
    //     if(comments){
    //       const comment = comments.map(data => 
    //        {
    //            return  (  
    //         <UserCommentsSkeleton   
    //          image_url={data?.image_url}         
    //          caption = {data.caption}
    //          points = {data.points}
    //         />
    //            )
            
    //         }
           
    //        );
    //        setComments(comment);
    //       } 
  
    //   }, [])
      
      return ( 
          <>
            <p className="top-72">Comments</p>
          </>
      );
}
 
export default Comments;

//     const getCommentsApi = async ()=>{
//     const response = await fetch('https://api.npoint.io/2da4f077d06b9a86d910')
//     const json = await response.json()
//     json.forEach((comment: { image_url: any; caption: any; points: any; })=>{
//         const html=`
//             <div class="comment-container">
//                 <div class="comment-img">
//                     <img src="${comment.image_url}" alt="">
//                     </div>
//                     <div class="comment">
//                     <div class="comment-text">
//                         <p class="text-white">${comment.caption}</p>
//                     </div>
//                     <div class="comment-items">
//                         <div class="comment-details">
//                         <div class="flex align-center">
//                             <div class="comment-vote"></div>
//                             <p>${comment.points}</p>
//                         </div>
                        
//                         <p>3 days</p>
//                         <button class="text-white">Reply</button>
//                         </div>
//                         <div class="comment-dropdown"><p></p></div>
//                     </div>
//                 </div>
//             </div>
//         `;
//     })
//  }