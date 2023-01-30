import { useContext } from "react";
import { PostContext } from "../../context/PostContext";

interface UpvoteButtonProps {
}

const UpvoteButton: React.FC<UpvoteButtonProps> = () => {

  const {upvoteBannerDisplay, setUpvoteBannerDisplay, setDownvoteBannerDisplay, setFavoriteBannerDisplay} = useContext(PostContext);
  
  const upvoteButtonClicked = () => {
    if(upvoteBannerDisplay === "hidden"){
      setUpvoteBannerDisplay("block")
      setDownvoteBannerDisplay("hidden");
      setFavoriteBannerDisplay("hidden");
    } else {
      setUpvoteBannerDisplay("hidden");
    }
  }
    return ( 
        <div className="flex shrink-0" onClickCapture={upvoteButtonClicked}>
        <svg width="32" height="32" viewBox="0 0 32 32" className="upvote" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Upvote</title><path fill="none" stroke="#ffffff" fillRule="evenodd" clipRule="evenodd" strokeWidth="2"  d="M14.8505 7.71282C15.5179 7.12573 16.4821 7.12573 17.1495 7.71282C17.9307 8.39996 19.1203 9.49532 20.75 11.125C22.4432 12.8182 23.6614 14.2739 24.44 15.28C24.9219 15.9028 24.4732 16.75 23.6857 16.75H20V23.0316C20 23.7799 19.5634 24.435 18.8251 24.5568C18.1981 24.6603 17.2841 24.75 16 24.75C14.7159 24.75 13.8019 24.6603 13.1749 24.5568C12.4366 24.435 12 23.7799 12 23.0316V16.75H8.31433C7.52677 16.75 7.07806 15.9028 7.56004 15.28C8.33861 14.2739 9.55681 12.8182 11.25 11.125C12.8797 9.49532 14.0693 8.39996 14.8505 7.71282Z"></path></svg>
      </div>   
     );
}
 
export default UpvoteButton;