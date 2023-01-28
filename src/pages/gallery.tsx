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
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import IPost, {IPostDefault} from "../interfaces/IPost";
import TitleSkeleton from "../components/GalleryPageComponents/TitleSkeleton";
import { PostContext } from "../context/PostContext";

interface GalleryProps {
    
}
 
const Gallery: React.FC<GalleryProps> = () => {

    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [prevId, setPrevId] = useState<string>("");
    const [nextId, setNextId] = useState<string>("");
    const {setPost} = useContext(PostContext); 
   
    // console.log(posts);
    const getPostById = async (postId:string) => {
        const response = await fetch("https://api.npoint.io/bc13239283496e6574a7");
        const responseJson = await response.json();
        const data = responseJson.data;
        let post: IPost = IPostDefault;
        let prevId: null|string = null;
        let nextId : null|string = null;
        for (let i = 0; i < data.length; i++) {
          if (data[i].id === postId) {
            if (data[i - 1]) {
              [post, prevId, nextId] = [data[i], data[i - 1].id, data[i + 1].id];
            } else {
              [post, nextId] = [data[i], data[i + 1].id];
            }
          }
        }
  
        setPost(post);
        if(nextId){
          setNextId(nextId);
        } 
        if(prevId){
          setPrevId(prevId);
        }
        setIsLoading(false);
      };

    let { id } = useParams(); 

    useEffect(()=> {
        if(id){
            getPostById(id);
        }
    },[id]) 

    const gallerySkeleton = (
      <Layout>
       <GradientBackground/>
       <MobileTitle/>
       <div
            className="flex relative z-10 h-full justify-center sm:top-20 sm:w-11/12 xl:w-4/5 mx-auto"
        >      
            <MainContainer>
                <EngagementBar/>
                <ContentContainer>
                    <TitleSkeleton />
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
    </Layout>
    )

    const gallery = (
      <Layout>
       <GradientBackground/>
       <MobileTitle/>
       <div
            className="flex relative z-10 h-full justify-center sm:top-20 sm:w-11/12 xl:w-4/5 mx-auto"
        >      
            <MainContainer>
                <EngagementBar/>
                <ContentContainer>
                    <Title prevPostId={prevId} nextPostId={nextId}/>
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
    </Layout>
    )

    const galleryPage = isLoading ? gallerySkeleton : gallery;

    return ( 
        galleryPage    
      );
}
 
export default Gallery;