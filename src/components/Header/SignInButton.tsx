interface Props {
    
}
 
const SignInButton: React.FC<Props> = () => {
    return ( 
        <button className="text-white hover:text-btnColor-1 font-sans font-semibold hidden sm:block" >
            <a href="http://localhost:5500/src/pages/login.html" >
            <p className="whitespace-nowrap">Sign in</p>
            </a>
        </button>
     );
}
 
export default SignInButton;