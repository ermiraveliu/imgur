import { useContext } from "react";
import { PostContext } from "../../context/PostContext";

interface FavoriteBannerProps {
}
 
const FavoriteBanner: React.FC<FavoriteBannerProps> = () => {
    
    const {favoriteBannerDisplay} = useContext(PostContext);  

    return ( 
        <div className={`absolute w-[400px] h-44 left-[55px] top-16 hidde pl-32  py-4 transition-all ${favoriteBannerDisplay}`} id="favorite-banner">
        <p className="text-lg font-bold">Fave and Never Forget</p>
        <p className="text-sm pt-2 pr-20">Sign up to save your favorite posts to your profile.</p>
        <div className="flex pt-4 font-bold gap-4">
            <button className=" rounded-full px-4 py-1 su-gradient hover:-translate-y-1 transition-all"><a href="./signUp.html">Sign up</a></button>
            <button className="hover:-translate-y-1 transition-all"><a href="./login.html">Sign in</a></button>
        </div>
      </div>
     );
}
 
export default FavoriteBanner;