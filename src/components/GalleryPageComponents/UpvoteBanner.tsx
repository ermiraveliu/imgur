interface UpvoteBannerProps {
    display: string;    
}
 
const UpvoteBanner: React.FC<UpvoteBannerProps> = ({display}) => {
    return ( 
        <div className={`absolute w-[400px] h-44 left-[55px] -top-16 pl-32 pr-20 py-4 transition-all ${display}`} id="upvote-banner">
        <p className="text-lg font-bold">Up and away!</p>
        <p className="text-sm pt-2">Sign up to upvote the posts you like and make them more popular.</p>
        <div className="flex pt-4 font-bold gap-4">
            <button className=" rounded-full px-4 py-1 su-gradient hover:-translate-y-1 transition-all"><a href="./signUp.html">Sign up</a></button>
            <button className="hover:-translate-y-1 transition-all"><a href="./login.html">Sign in</a></button>
        </div>
      </div>
     );
}
 
export default UpvoteBanner;