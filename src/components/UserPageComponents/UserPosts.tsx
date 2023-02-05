import Posts from "../../containers/Posts";


interface UserPostsProps {
    
}
 
const UserPosts: React.FC<UserPostsProps> = () => {
    return ( 
        <div className="user-posts">
            <div className="relative -top-[330px]">
            <Posts apiEndpoint="https://api.npoint.io/bc13239283496e6574a7"/>
            </div>   
        </div>
     );
}
 
export default UserPosts;