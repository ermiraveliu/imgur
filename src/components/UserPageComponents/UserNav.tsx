import { Link, Outlet, useParams } from "react-router-dom";

interface UserNavProps {
    
}


const UserNav: React.FC<UserNavProps> = () => {
    const emri = useParams().username;
    

    return ( 
        <>
            <div className="relative top-60 w-full flex flex-col items-center bg-bgColor">
                <div id="pages-container" className="z-30 sticky top-2 py-4 w-1/2">
                    <Link to={`/user/${emri}/posts`} className="active-page text-white cursor-pointer">POSTS</Link>
                    <Link to={`/user/${emri}/comments`} className="active-page text-white cursor-pointer">COMMENTS</Link>
                    <Link to={`/user/${emri}/about`} className="active-page text-white cursor-pointer">ABOUT</Link>
                </div>

                    <div id="nav" className="nav z-10 sticky top-[68px] w-full py-2 flex justify-center items-center bg-[#051234] h-12">
                    <div className="flex justify-between items-center text-gray-200 text-sm w-3/4">
                        <div className="flex gap-4">
                            <p className="text-white">ALL</p>
                            <p>PUBLIC</p>
                            <p>HIDDEN</p>
                        </div>
                    </div>
                    </div>
            </div>
            <Outlet/>
        </>


     );

    
}
 
export default UserNav;