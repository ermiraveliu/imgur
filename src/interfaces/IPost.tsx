import IImage from "./IImage"
import ITag from "./ITag";

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
  tags: ITag[]
}

export function instanceOfIPost(object: any): object is IPost {
  return 'images' in object;
}

  export default IPost;
