import ITag from "../../interfaces/ITag";

interface TagProps {
    tag: ITag
}

const mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
  };
 
const Tag: React.FC<TagProps> = ({tag}) => {
    return ( 
        <div className="rounded-full py-1 sm:py-2 px-3 sm:px-6 text-gray-100 text-xs sm:text-sm font-semibold" style={{textShadow:"0 1px 4px #000", boxShadow:"0 5px 5px rgb(0 0 0 / 25%)", backgroundImage:`url('https://i.imgur.com/${tag.background_hash}_d.jpg?maxwidth=200&fidelity=grand')`}}>{tag.display_name}
        </div>
     );
}

export default Tag;