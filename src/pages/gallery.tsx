import MobileTitle from "../components/GalleryPageComponents/MobileTitle";
import GradientBackground from "../components/GalleryPageComponents/GradientBackground";
import Layout from "../containers/Layout";
import Sidebar from "../components/GalleryPageComponents/Sidebar";
import ExplorePosts from "../components/GalleryPageComponents/ExplorePosts";
import MobileEngagementBar from "../components/GalleryPageComponents/MobileEngagementBar";
import LoadAllComments from "../components/GalleryPageComponents/LoadAllComments";
import ContentContainer from "../components/GalleryPageComponents/Skeletons/ContentContainer";
import React, { useContext } from "react";
import { PostContext } from "../context/PostContext";

interface GalleryProps {    
}
 
const Gallery: React.FC<GalleryProps> = () => {

   const {
    setUpvoteBannerDisplay, 
    setDownvoteBannerDisplay, 
    setFavoriteBannerDisplay
  } = useContext(PostContext);
  
   const handleClick = (e:React.MouseEvent<HTMLElement>) => {
    setUpvoteBannerDisplay("hidden");
    setDownvoteBannerDisplay("hidden");
    setFavoriteBannerDisplay("hidden");
   }
    return ( 
       <div onClickCapture= {handleClick}>
          <Layout backgroundColor="bgGradientColor">
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
       </div>
     );
}
 
export default Gallery;