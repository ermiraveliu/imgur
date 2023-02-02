import Logo from "./Logo";
import NewPostButton from "./NewPostButton";

interface Props {
    
}
 
const Left: React.FC<Props> = () => {
    return ( 
        <div className="flex gap-4">
        <Logo />
        <NewPostButton/>      
        </div>
     );
}
 
export default Left;