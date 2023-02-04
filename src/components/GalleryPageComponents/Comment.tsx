import IComment from "../../interfaces/IComment";
import Avatar from "./AvatarImages";

interface CommentProps {
    comment: IComment
}

interface commentBody {
  text: string,
  image: string|null
}
const Comment: React.FC<CommentProps> = ({comment}) => {

  const createCommentBody = (comment: commentBody) => {
    let commentBody;
    if (comment.image !== null  && comment.text !== null) {
      const image = addImage(comment.image);
      commentBody = 
      (<div>
          {image}
          <p className="pt-2">${comment.text}</p>
        </div>
      );
    } else if (comment.image !== null) {
      commentBody= addImage(comment.image);
    } else {
      commentBody= comment.text;
    }
    return commentBody;
    };

  const addImage = (url: string) => {
    let temp = url.split(".");
    let imageHtml;
    const extension = temp[temp.length - 1];
    if (extension === "mp4") {
      imageHtml = 
        (<video className="rounded h-[120px] mr-3" autoPlay loop muted>
        <source src={url} type="video/mp4"/>
        </video>
        );
    } else if (extension === "jpg") {
      imageHtml = (
        <img src={url} className="rounded h-[120px] mr-3" alt=""/>
        );
    }
    return imageHtml;
  };
    
  const commentBody = createCommentBody(comment.body);
    return ( 
        <div>
        <div className="flex px-1 my-2 py-2 gap-2 text-xs sm:rounded-xl sm:hover:bg-gray-800">
          <Avatar username={comment.name} />
          <div className="flex flex-col gap-2">
            <p className="pt-1 text-gray-200 font-bold tracking-wide sm:text-btnColor-1 sm: sm:top-1">{comment.name}</p>
            <div className="sm:mt-2 sm:left-0 font-medium text-sm tracking-wide first-letter:uppercase">{commentBody}</div>
            <div className="flex items-center gap-6 py-1">
              <p className="text-gray-900">
                 <svg width="32" className="w-6 h-6" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Upvote</title><path fill="none" stroke="#ffffff" stroke-width="2" fill-rule="evenodd" clip-rule="evenodd" d="M14.8505 7.71282C15.5179 7.12573 16.4821 7.12573 17.1495 7.71282C17.9307 8.39996 19.1203 9.49532 20.75 11.125C22.4432 12.8182 23.6614 14.2739 24.44 15.28C24.9219 15.9028 24.4732 16.75 23.6857 16.75H20V23.0316C20 23.7799 19.5634 24.435 18.8251 24.5568C18.1981 24.6603 17.2841 24.75 16 24.75C14.7159 24.75 13.8019 24.6603 13.1749 24.5568C12.4366 24.435 12 23.7799 12 23.0316V16.75H8.31433C7.52677 16.75 7.07806 15.9028 7.56004 15.28C8.33861 14.2739 9.55681 12.8182 11.25 11.125C12.8797 9.49532 14.0693 8.39996 14.8505 7.71282Z"></path></svg>
                 </p>
              <p className="text-white text-xs font-medium">{comment.votes}</p>
              <svg width="32" height="32" viewBox="0 0 32 32" className="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Downvote</title><path fill="none" stroke="#ffffff" fill-rule="evenodd" clip-rule="evenodd" stroke-width="2" d="M17.1495 24.2872C16.4821 24.8743 15.5179 24.8743 14.8505 24.2872C14.0693 23.6 12.8797 22.5047 11.25 20.875C9.55681 19.1818 8.33861 17.7261 7.56005 16.72C7.07806 16.0972 7.52677 15.25 8.31433 15.25L12 15.25L12 8.96842C12 8.2201 12.4366 7.56497 13.1749 7.44316C13.8019 7.33973 14.7159 7.25 16 7.25C17.2841 7.25 18.1981 7.33973 18.8251 7.44317C19.5634 7.56497 20 8.2201 20 8.96842L20 15.25L23.6857 15.25C24.4732 15.25 24.9219 16.0972 24.44 16.72C23.6614 17.7261 22.4432 19.1818 20.75 20.875C19.1203 22.5047 17.9307 23.6 17.1495 24.2872Z"></path></svg>
            </div>
          </div>
        </div>
        <div className="bg-gray-900 h-px w-full sm:bg-gray-500"></div>
      </div>
     );
}
 
export default Comment;