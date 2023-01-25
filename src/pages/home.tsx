import PostSkeleton from "../components/PostSkeleton";
import Posts from "../containers/Posts";
interface HomeProps {
    
}

{/* <PostSkeleton id={"eokvnwe"} height={63} width={234} title={"test"} votes={424} comment_count={52} views={85} animated ={false} imageId={"sdfgb"} count={516}></PostSkeleton>  */}
 
const Home: React.FC<HomeProps> = () => {
    //   id,
//   height,
//   width,
//   title,
//   votes,
//   comment_count,
//   views,
//   animated,
//   imageId,
//   count

// 
    return (<PostSkeleton id={"eokvnwe"} height={63} width={234} title={"test"} votes={424} comment_count={52} views={85} animated ={false} imageId={"sdfgb"} count={516}></PostSkeleton>  );
}
 
export default Home;