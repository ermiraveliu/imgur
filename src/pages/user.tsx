import UserNav from "../components/UserPageComponents/UserNav";
import UserProfile from "../components/UserPageComponents/UserProfile";


interface UserProps {
    
}
 
const User: React.FC<UserProps> = () => {
    return ( 
        <>
            <UserProfile/>
            <UserNav/>
        </>
     );
}
 
export default User;