
interface Props {
    
}
 
const SignUpButton: React.FC<Props> = () => {
    return (
        <button
            className="btn bg-btnColor-1 hover:bg-btnColor-2 w-auto flex items-center px-2  sm:py-1 sm:px-6 rounded-sm text-white font-semibold text-sm"
        >
            <a href="http://localhost:5500/src/pages/signUp.html" className="whitespace-nowrap flex items-center">
            <span className="material-symbols-outlined sm:hidden" >
                login
            </span>
            <p className="whitespace-nowrap hidden sm:block">Sign up</p>   
            </a>
        </button>
      );
}
 
export default SignUpButton;