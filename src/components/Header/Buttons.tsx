import SignInButton from "./SignInButton";
import SignUpButton from "./SignUpButton";

interface ButtonsProps {
    isVisible: boolean,
    inGalleryPage?:boolean,
}
 
const Buttons: React.FC<ButtonsProps> = ({isVisible, inGalleryPage}) => {
    return ( 
        <div className="flex gap-4" style={{visibility: isVisible && !inGalleryPage? `hidden`: `visible`}}>  
            <SignInButton />
            <SignUpButton />
        </div>
     );
}
 
export default Buttons;