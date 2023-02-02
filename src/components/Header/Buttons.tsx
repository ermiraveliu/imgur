import SignInButton from "./SignInButton";
import SignUpButton from "./SignUpButton";

interface ButtonsProps {
    
}
 
const Buttons: React.FC<ButtonsProps> = () => {
    return ( 
        <div className="flex gap-4">  
            <SignInButton />
            <SignUpButton />
        </div>
     );
}
 
export default Buttons;