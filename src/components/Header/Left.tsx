import { useContext } from "react";
import { PageContext } from "../../context/PageContext";
import Logo from "./Logo";
import NewPostButton from "./NewPostButton";

interface Props {
}


const Left: React.FC<Props> = () => {
    const {isVisible, setIsVisible} = useContext<any>(PageContext)

    return ( 
        <div className="flex gap-4" style={{visibility: isVisible? `hidden`: `visible`}}>
        <Logo />
        <NewPostButton/>      
        </div>
     );
}
 
export default Left;