import { Link } from "react-router-dom";

interface SidebarPostProps {
    postId: string,
    imageId: string, 
    title: string,
}
 
const SidebarPost: React.FC<SidebarPostProps> = ({postId, imageId, title}) => {
    return ( 
        <Link to={`../gallery/${postId}`}>
        <div className="flex items-center w-full my-3">
        <img src={`https://i.imgur.com/${imageId}.jpg`} className="rounded w-[64px] h-[64px] mr-3" alt=""/>
        <p className="text-xs text-gray-100 font-semibold">{title}</p>
        </div>
        </Link>
     );
}
 
export default SidebarPost;