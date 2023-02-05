import { useParams } from "react-router-dom";

interface ProfileProps {
    
}


// type diqka = {
//     backgroundImage: string,
// }
 
const Profile: React.FC<ProfileProps> = () => {

    const {username} = useParams();
    


    return ( 
        <>
            <section
                className="header-container bg-bgColor flex flex-col justify-center items-center gap-y-5 h-auto pb-20 absolute top-0 w-full py-8"
                >
                
                <section className="user py-10">
                    <div className="profile">
                        <div className="profile-img"></div>
                        <div className="profile-data">
                            <h2 className="profile-username text-white text-3xl font-bold">{username}</h2>
                            <div className="profile-data-container">
                                <p>206,948 PTS</p>
                                <p> &middot;  </p>
                                <p> GLORIOUS</p>
                                <div className="profile-data-chat">
                                    <svg width="15px" height="15px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M4.8 3H19.2C20.19 3 21 3.81 21 4.8V15.6C21 16.59 20.19 17.4 19.2 17.4H6.6L3 21V4.8C3 3.81 3.81 3 4.8 3ZM6.6 15.6H19.2V4.8H4.8V17.4L6.6 15.6Z" fill="#ffffff"></path> </g></svg>
                                    <p> CHAT </p> 
                                </div>
                            </div>
                        </div>
                    </div>
                </section>  
            </section>
            
        </>
                
     );
}
 
export default Profile;