import Posts from "../../containers/Posts";

interface ExplorePostsProps {
    
}
 
     {/* style=" text-shadow: 0 1px 4px #000;" */}

const ExplorePosts: React.FC<ExplorePostsProps> = () => {
    return ( 
        <div className="w-full">

        <div className="w-full h-32 hidden sm:block bg-gray-800 mt-32"></div>
   
         <p className="text-white text-center uppercase text-base font-medium my-10">
         Explore posts
         </p>
         <Posts apiEndpoint="https://api.npoint.io/bc13239283496e6574a7"/>
         </div>
     );
}
 
export default ExplorePosts;