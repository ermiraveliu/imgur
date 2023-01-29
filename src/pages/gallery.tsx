import EngagementBar from "../components/GalleryPageComponents/EngagementBar";
import MobileTitle from "../components/GalleryPageComponents/MobileTitle";
import GradientBackground from "../components/GalleryPageComponents/GradientBackground";
import Layout from "../containers/Layout";
import Sidebar from "../components/GalleryPageComponents/Sidebar";
import ExplorePosts from "../components/GalleryPageComponents/ExplorePosts";
import MobileEngagementBar from "../components/GalleryPageComponents/MobileEngagementBar";
import LoadAllComments from "../components/GalleryPageComponents/LoadAllComments";
import ContentContainer from "../components/GalleryPageComponents/Skeletons/ContentContainer";

interface GalleryProps {    
}
 
const Gallery: React.FC<GalleryProps> = () => {

    return ( 
      <Layout>
      <GradientBackground/>
      <MobileTitle/>
      <div
           className="flex relative z-10 h-full justify-center sm:top-20 sm:w-11/12 xl:w-4/5 mx-auto"
       >      
     <ContentContainer/>
     <Sidebar/>
     </div>
     <LoadAllComments/>
     <ExplorePosts/>
     <MobileEngagementBar/>    
   </Layout>
     );
}
 
export default Gallery;