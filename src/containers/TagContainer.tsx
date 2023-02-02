import Tags from "../components/Tag/Tags";
import Buttons from "../components/Tag/Buttons";

interface Props {
    
}
 
const TagContainer: React.FC<Props> = () => {
    return ( 
        <div className="absolute top-0 left-0 right-0 h-[456px] bg-bgColor bg-[url('./assets/Press_Page.jpg')] bg-cover flex flex-col pt-20 pb-32 px-36 justify-between items-center text-white">
            <h1 className="text-2xl text-[#aed7eb] font-bold">Is it memes you're looking for?</h1>
            <Buttons />
            <Tags/>
        </div>
     );
}
 
export default TagContainer;