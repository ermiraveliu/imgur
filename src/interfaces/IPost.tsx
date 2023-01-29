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
  images: IImage[];
}


  
export function instanceOfIPost(object: any): object is IPost {
  return 'images' in object;
}

  export default IPost;
