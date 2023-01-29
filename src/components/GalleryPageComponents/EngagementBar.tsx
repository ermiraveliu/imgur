import { useContext, useState } from "react";
import { PostContext } from "../../context/PostContext";
import CommentButton from "./CommentButton";
import DownvoteBanner from "./DownvoteBanner";
import DownvoteButton from "./DownvoteButton";
import FavoriteBanner from "./FavoriteBanner";
import FavoriteButton from "./FavoriteButton";
import ShareButton from "./ShareButton";
import UpvoteBanner from "./UpvoteBanner";
import UpvoteButton from "./UpvoteButton";
interface EngagementBarProps {
}
 
const EngagementBar: React.FC<EngagementBarProps> = () => {
  
  const [upvoteBannerDisplay, setUpvoteBannerDisplay] = useState<string>("hidden");
  const [downvoteBannerDisplay, setDownvoteBannerDisplay] = useState<string>("hidden");
  const [favoriteBannerDisplay, setFavoriteBannerDisplay] = useState<string>("hidden");

  const upvoteButtonClicked = () => {
      if(upvoteBannerDisplay === "hidden"){
        setUpvoteBannerDisplay("block")
        setDownvoteBannerDisplay("hidden");
        setFavoriteBannerDisplay("hidden");
      } else {
        setUpvoteBannerDisplay("hidden");
      }
      console.log(upvoteBannerDisplay)
  }

  const downvoteButtonClicked = () => {
    if(downvoteBannerDisplay === "hidden"){
      setDownvoteBannerDisplay("block")
      setUpvoteBannerDisplay("hidden");
      setFavoriteBannerDisplay("hidden");
 
    } else {
      setDownvoteBannerDisplay("hidden");
    }
    console.log(upvoteBannerDisplay)
}
  const favoriteButtonClicked = () => {
    if(favoriteBannerDisplay === "hidden"){
      setFavoriteBannerDisplay("block")
      setUpvoteBannerDisplay("hidden");
      setDownvoteBannerDisplay("hidden");
    } else {
      setFavoriteBannerDisplay("hidden");
    }
    console.log(upvoteBannerDisplay)
}
  const {post} = useContext(PostContext);
    return (
        <div className="flex-col flex-grow-0 flex-shrink-0 items-center text-white hidden sm:flex">
        <div className="sticky top-80">
            <div className="flex relative">
            <div>
              <div
              className="flex flex-col w-full gap-4 border border-gray-500 rounded py-2 px-4 items-center mb-7"
            >
              <div onClick={upvoteButtonClicked}><UpvoteButton /></div>
              <div className="votes text-xs font-semibold">
                {post.ups}
              </div>              
              <div onClick={downvoteButtonClicked}><DownvoteButton /></div>
              <div onClick={favoriteButtonClicked}><FavoriteButton /></div>
            </div>
              <ShareButton/>
              <CommentButton/>
            </div>
            <UpvoteBanner display={upvoteBannerDisplay}/>
            <DownvoteBanner display={downvoteBannerDisplay}/>
            <FavoriteBanner display={favoriteBannerDisplay}/>
            </div>
        </div>
      </div>
    );
}
 
export default EngagementBar;