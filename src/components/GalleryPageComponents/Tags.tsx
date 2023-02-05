import { useContext } from "react";
import { PostContext } from "../../context/PostContext";
import ITag from "../../interfaces/ITag";
import Tag from "./Tag";

interface TagsProps {
}
 
const Tags: React.FC<TagsProps> = () => {
    const {post} = useContext(PostContext);
    const tags:(ITag[]) = post.tags;
    let allTags;
    if(tags.length > 0) {
        allTags = tags.map(tag => {
           return  <Tag tag= {tag}/>
        })
    }
    return ( 
        <div className="hidden sm:flex flex-wrap py-2 gap-2" id="tags">
           {allTags}
        </div>
     );
}
 
export default Tags;