import { useContext } from "react";
import { PageContext } from "../../context/PageContext";
import SignInButton from "./SignInButton";
import SignUpButton from "./SignUpButton";

interface ButtonsProps {
}
 
const Buttons: React.FC<ButtonsProps> = () => {
    const {page, setPage} = useContext<any>(PageContext)
    const {isVisible, setIsVisible} = useContext<any>(PageContext)
    
    return ( 
        <div className="flex gap-4" style={{visibility: isVisible && (page==='home' || page==='user')? `hidden`: `visible`}}>  
            <SignInButton />
            <SignUpButton />
        </div>
     );
}
 
export default Buttons;