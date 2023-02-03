import ITag from "./ITag";

export interface IExpandedPost {
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
    description: string|null;
    type: string;
    animated: boolean;
    width: number;
    height: number;
    size: number;
    tags: ITag[],
  }
  
   export const IPostDefault:IExpandedPost = {
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
     description: null,
     type: "",
     animated: false,
     width: 0,
     height: 0,
     size: 0,  
     tags: [] 
    }