import { useEffect, useState } from "react";
import ITag from "../../interfaces/ITag";
import Tag from "./Tag";

interface TagsProps {

}
 
const Tags: React.FC<TagsProps> = () => {

    const [tags, setTags] = useState<JSX.Element[]>();

    useEffect(() => {
        const getTags = async () => { 
        const res = await fetch("https://api.npoint.io/c84c906dc1ecf067f09a")
        const json = await res.json();
        const data: ITag[] = json.data.tags;
            const tags = data.map(tag => {
                return (
                        <Tag key={tag.id} id={tag.id} name={tag.name} total_items={tag.total_items} display_name={tag.display_name} background_hash={tag.background_hash} />
            )
        })
        setTags(tags)
        }
        getTags()

    }, [])

    return (
        <div className="flex flex-wrap justify-between gap-y-4 overflow-hidden py-4 h-[176px]">
            {tags}
        </div>
    )

}
 
export default Tags;