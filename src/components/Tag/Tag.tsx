import ITag from "../../interfaces/ITag";

 

const Tag: React.FC<ITag> = ({ id, name, total_items, display_name, background_hash }) => {
    let gradientStartColor = Math.floor(Math.random() * 6) + 1;

    return ( 

        <div
        className="w-32 h-36 hover:-translate-y-1 flex flex-col transition-all justify-end rounded-md"
            >
            <img
                    alt=""
                    src = {`https://i.imgur.com/${background_hash}_d.jpg?maxwidth=800&shape=thumb&fidelity=high`}
                className="object-center object-cover rounded-t-md h-full"
            /> 
            <div
            className={`rounded-b-md flex flex-col items-center gap-0.5 py-3 title-color bg-tagColor-${gradientStartColor}`}
            >
                    <p className="text-white font-semibold text-sm title">{display_name}</p>
            <p className="text-xs text-[rgba(255,255,255,0.6)] font-semibold posts">
                {total_items} posts
            </p>
            </div>
            </div>
     );
}
 
export default Tag;