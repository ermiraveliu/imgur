interface IPost {
    id:string,
    images: {
      height: number, 
      width: number,
      animated: boolean,
      id: string
    }[],
     title: string, 
     ups: number, 
     comment_count: number,
      views:number,
  }

  export default IPost;