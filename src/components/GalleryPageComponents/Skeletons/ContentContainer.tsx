import TitleSkeleton from "./TitleSkeleton";
import Image from "../Image";
import Comments from "../Comments";
import { useState, useContext, useEffect } from "react";
import { PostContext } from "../../../context/PostContext";
import IPost, { IPostDefault } from "../../../interfaces/IPost";
import { useParams } from "react-router-dom";
import Title from "../Title";
import ImageSkeleton from "./ImageSkeleton";
import EngagementBarSkeleton from "./EngagementBarSkeleton";
import EngagementBar from "../EngagementBar";
import CommentsSkeleton from "./CommentsSkeleton";

interface ContentContainerProps {
}
 
const ContentContainer: React.FC<ContentContainerProps> = () => {

    const [isLoading, setIsLoading] = useState<boolean>();
    const [prevId, setPrevId] = useState<string>("");
    const [nextId, setNextId] = useState<string>("");
    const {setPost} = useContext(PostContext); 
   
    const getPostById = async (postId:string) => {
        setIsLoading(true);
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

    const skeleton = (
        <>
          <EngagementBarSkeleton/>
          <div className="mx-0 px-0 w-full sm:mx-6 sm:px-6 md:ml-4">
            <TitleSkeleton />
            <ImageSkeleton/>
            <div className="hidden sm:flex flex-wrap py-2 gap-2" id="tags">
            </div>
            <CommentsSkeleton/>
          </div>
         </>
    )

    const content = (
        <>
          <EngagementBar/>
          <div className="mx-0 px-0 w-full sm:mx-6 sm:px-6 md:ml-4">
            <Title prevPostId={prevId} nextPostId={nextId}/>
            <Image/>
            <div className="hidden sm:flex flex-wrap py-2 gap-2" id="tags">
            </div>
            <Comments/>
          </div>
        </>
    )

    const element = isLoading ? skeleton : content;


    return (
        <div className="w-full flex justify-center h-full">
            {element}
        </div>
    );
}
 
export default ContentContainer;