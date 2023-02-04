import Tags from "../components/Tag/Tags";
import Buttons from "../components/Tag/Buttons";
import { useState, useLayoutEffect } from "react";

interface Props {
    
}
 
const TagContainer: React.FC<Props> = () => {
  

    const [scrollTop, setScrollTop] = useState(0);
    useLayoutEffect(() => {
        const handleScroll = () => {
            setScrollTop(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
    }, []);
  
    

    return ( 
        <div style={{
            transform: scrollTop <= 440 ? `translate3d(0, -${scrollTop}px, 0)` : undefined
          }} className="absolute top-0 left-0 right-0 h-[456px] bg-bgColor bg-[url('./assets/Press_Page.jpg')] bg-cover flex flex-col pt-20 pb-32 px-36 justify-between items-center text-gray-200">
            <h1 className="text-2xl text-[#aed7eb] font-bold">Is it memes you're looking for?</h1>
            <Buttons />
            <Tags/>
        </div>
     );
}
 
export default TagContainer;