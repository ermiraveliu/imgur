interface LoadAllCommentsProps {
    
}
 
const LoadAllComments: React.FC<LoadAllCommentsProps> = () => {
    return ( 
        <button className="w-full h-10 sm:hidden text-white flex justify-center items-center font-medium tracking-wide bg-blue expandAll">See All Comments</button>
     );
}
 
export default LoadAllComments;