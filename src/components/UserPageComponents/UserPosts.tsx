import Posts from "../GalleryPageComponents/Posts";


interface UserPostsProps {
    
}
 
const UserPosts: React.FC<UserPostsProps> = () => {
    return ( 
        <div className="user-posts relative -top-[200px]">
            <div className="relative -top-[104px]">
            <Posts apiEndpoint="https://api.npoint.io/bc13239283496e6574a7"/>
            </div>   
        </div>
     );
}
 
export default UserPosts;