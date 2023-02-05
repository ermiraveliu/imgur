import Logo from "./Logo";
import NewPostButton from "./NewPostButton";

interface Props {
    isVisible:boolean
}


const Left: React.FC<Props> = ({isVisible}) => {

    return ( 
        <div className="flex gap-4" style={{visibility: isVisible? `hidden`: `visible`}}>
        <Logo />
        <NewPostButton/>      
        </div>
     );
}
 
export default Left;