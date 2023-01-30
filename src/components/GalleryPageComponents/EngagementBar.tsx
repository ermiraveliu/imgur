import { useContext} from "react";
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
  

   const {post} = useContext(PostContext);
    return (
      <div className="flex-col flex-grow-0 flex-shrink-0 items-center text-white hidden sm:flex">
        <div className="sticky top-80">
            <div className="flex relative">
              <div>
                <div
                className="flex flex-col w-full gap-4 border border-gray-500 rounded py-2 px-4 items-center mb-7"
                 >
                  <UpvoteButton />
                  <div className="votes text-xs font-semibold">
                    {post.ups}
                  </div>              
                  <DownvoteButton />
                  <FavoriteButton/>
                </div>
                <ShareButton/>
                <CommentButton/>
              </div>
              <UpvoteBanner/>
              <DownvoteBanner/>
              <FavoriteBanner/>
            </div>
        </div>
      </div>
    );
}
 
export default EngagementBar;