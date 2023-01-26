import EngagementBar from "../components/GalleryPageComponents/EngagementBar";
import MobileTitle from "../components/GalleryPageComponents/MobileTitle";
import Title from "../components/GalleryPageComponents/Title";
import GradientBackground from "../components/GalleryPageComponents/GradientBackground";
import Layout from "../containers/Layout";
import Sidebar from "../components/GalleryPageComponents/Sidebar";
import ExplorePosts from "../components/GalleryPageComponents/ExplorePosts";
import MobileEngagementBar from "../components/GalleryPageComponents/MobileEngagementBar";
import Image from "../components/GalleryPageComponents/Image";
import Comments from "../components/GalleryPageComponents/Comments";
import LoadAllComments from "../components/GalleryPageComponents/LoadAllComments";
import MainContainer from "../containers/GalleryPageContainers/MainContainer";
import ContentContainer from "../containers/GalleryPageContainers/ContentContainer";

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
            <MainContainer>
                <EngagementBar/>
                <ContentContainer>
                    <Title/>
                    <Image/>
                    <div className="hidden sm:flex flex-wrap py-2 gap-2" id="tags">
                    </div>
                    <Comments/>
                </ContentContainer>
            </MainContainer>      
      <Sidebar/>
      </div>
      <LoadAllComments/>
      <ExplorePosts/>
      <MobileEngagementBar/>    
    </Layout> );
}
 
export default Gallery;