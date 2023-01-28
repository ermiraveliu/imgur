import { Link } from "react-router-dom"

interface NextButtonProps {
    nextPostId: string
    prevPostId: string
}
 
const NextButton: React.FC<NextButtonProps> = ({prevPostId, nextPostId}) => {
    return ( 
        <div className="flex items-center  justify-center text-white">
        <Link to={`../gallery/${prevPostId}`} className="w-10 h-9 p-0.5 flex justify-center items-center bg-gray-500 rounded-l previous-btn" id="previous-btn"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Chevron Pointing Left</title><path d="M10 12L6 8.004 10 4" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></Link>
        <Link to={`../gallery/${nextPostId}`} className="bg-blue h-9 w-10 p-1 xl:w-20 rounded-r text-sm font-semibold tracking-wide flex items-center justify-center gap-1 shrink-0 next-btn" id="next-btn"><span className="hidden xl:block">Next</span> <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><title>Chevron Pointing Right</title><path d="M6 12l4-3.996L6 4" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></Link>
      </div>
     );
}
 
export default NextButton;