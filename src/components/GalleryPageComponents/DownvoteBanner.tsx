interface DownvoteBannerProps {
    display: string
}
 
const DownvoteBanner: React.FC<DownvoteBannerProps> = ({display}) => {
    return ( 
        <div className={`absolute w-[400px] h-44 left-[55px] top-4 hidde pl-32 pr-20 py-4 ${display} transition-all`} id="downvote-banner">
        <p className="text-lg font-bold">Beg to differ?</p>
        <p className="text-sm pt-2">Sign up to downvote the posts that rub you the wrong way.</p>
        <div className="flex pt-4 font-bold gap-4">
            <button className=" rounded-full px-4 py-1 su-gradient hover:-translate-y-1 transition-all"><a href="./signUp.html">Sign up</a></button>
            <button className="hover:-translate-y-1 transition-all"><a href="./login.html">Sign in</a></button>
        </div>
      </div>
     );
}
 
export default DownvoteBanner;