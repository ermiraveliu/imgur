import IImage from "./IImage"

interface IPost {
  id: string;
  title: string;
  datetime: number;
  account_url: string;
  views: number;
  link: string;
  ups: number;
  downs: number;
  points: number;
  score: number;
  vote: number;
  comment_count: number;
  images?: IImage[];
}

 export const IPostDefault:IPost = {
   id:"",
   title:  "", 
   comment_count: 0,
   views:0,
   datetime: 0,
   account_url: "",
   link: "",
   ups: 0,
   downs:0,
   points: 0,
   score: 0,
   vote: 0,
   
  }

  export default IPost;
