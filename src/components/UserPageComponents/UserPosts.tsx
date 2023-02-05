import Posts from "../../containers/Posts";


interface UserPostsProps {
    
}
 
const UserPosts: React.FC<UserPostsProps> = () => {
    return ( 
        <div className="user-posts">
            <Posts apiEndpoint="https://api.npoint.io/bc13239283496e6574a7"/>
        </div>
     );
}
 
export default UserPosts;