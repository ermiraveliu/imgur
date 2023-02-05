import { useContext } from "react";
import { PostContext } from "../../context/PostContext";
import Avatar from "./AvatarImages";
import NextButton from "./NextButton";

interface TitleProps {
    prevPostId: string,
    nextPostId: string
} 

const calcPostAge = (datePosted: number) => {
  const f = Math.floor;
  const currentDate = Date.now() / 1000;
  let difference = currentDate - datePosted ;
  let diff;
  const [
    secondsInAMinute,
    secondsInAHour,
    secondsInADay,
    secondsInAWeek,
    secondsInAMonth,
    seoncdsInAYear,
  ] = [60, 3600, 86400, 604800, 2.6298e6, 3.15576e7];
  if (difference < secondsInAMinute) {
    diff = difference + "s";
  } else if (difference < secondsInAHour) {
    diff = f(difference / 60) + "m";
  } else if (difference < secondsInADay) {
    diff = difference / 3600 + "hours";
  } else if (difference < secondsInAWeek) {
    diff = f(difference / 86400) + "d";
  } else if (difference < secondsInAMonth) {
    diff = f(difference / secondsInAWeek) + " week";
  } else if (difference < seoncdsInAYear) {
    diff = f(difference / secondsInAMonth) + " month";
  } else {
    diff = f(difference / seoncdsInAYear) + "y";
  }
  return diff;
};

const Title: React.FC<TitleProps> = ({ prevPostId, nextPostId}) => {

  const {post} = useContext(PostContext);
    return ( 
        <div className="hidden sm:block">
        <div className="post-title flex items-start justify-between gap-4">
          <div className="text-white w-full text-2xl lg:text-3xl mb-3 font-bold title">{post.title}
          </div>
          <NextButton prevPostId={prevPostId} nextPostId={nextPostId}/>
        </div>
          <div className="flex gap-2 w-full mb-5">
              <Avatar username={post.account_url}/>
            <div className=" flex justify-between w-full items-center">
                <div>
                    <div className="text-btnColor-1 account_name text-xs tracking-wide font-semibold">
                       {post.account_url}
                    </div>
                    <div className="text-gray-200 flex gap-1  text-xs font-medium">
                        <div className="views">                        
                        {post.views} views
                      </div>
                        <span> &#8226;</span>
                        <span id="post_age">                        
                           {calcPostAge(post.datetime)}
                        </span>
                    </div>
                </div>
            </div>
          </div>
        </div>
     );
}
 
export default Title;