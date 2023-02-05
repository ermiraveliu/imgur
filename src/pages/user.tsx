import { useContext } from "react";
import UserNav from "../components/UserPageComponents/UserNav";
import UserProfile from "../components/UserPageComponents/UserProfile";
import Layout from "../containers/Layout";
import { PageContext } from "../context/PageContext";


interface UserProps {
    
}
 
const User: React.FC<UserProps> = () => {
    const {setPage} = useContext<any>(PageContext);
    setPage('user')

    return ( 
        <>
            <Layout backgroundColor="">
                <UserProfile/>
                <UserNav/>
            </Layout>
        </>
     );
}
 
export default User;