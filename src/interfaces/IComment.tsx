interface IComment{
    "postId": string,
    "avatar" : string|undefined 
    "name": string,
    "body": {
      "text": string,
      "image": string|null
    },
    "votes": number
  }

  export default IComment