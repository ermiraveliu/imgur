// import PostSkeleton from "./components/PostSkeleton";
// const addPosts = (dataArray:IPost[], infinite:boolean) => {
//     let limitedDataArray = dataArray.slice(0, 30);
//     let postsLoadedCount = 30;
//     addMorePosts(limitedDataArray); //keeps track of the posts loaded count
//     window.addEventListener("scroll", () => {
//       const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
//       if (clientHeight + scrollTop >= scrollHeight - 500) {
//         //If there are no more elements in the dataArray and infinite scroll is enabled start from the beggining of the array.
//         if (postsLoadedCount > dataArray.length - 60) {
//           if (infinite) {
//             postsLoadedCount = 0;
//           }
//           //If there are no more elements in the dataArray and infinite scroll is not enabled remove the spinner
//           else {
//             const spinner = document.getElementById("spinner");
//             if(spinner){
//               spinner.innerHTML = "";
//             }
//           }
//         }
//         limitedDataArray = dataArray.slice(
//           postsLoadedCount,
//           postsLoadedCount + 60
//         );
//         postsLoadedCount += 60;
//         addMorePosts(limitedDataArray);
//       }
//     });
//   };
  
//   //Adds images to post skeletons
// export const addGalleryImages = async (url: string) => {
//   const dataArray = await getData(url);
//   addPosts(dataArray, true);
// };
//   const addMorePosts = (dataArray:IPost[]) => {
//     //Creates post skeletons from the data array and adds them to the container
//     // const res = createPostsSkeletons(dataArray);
//     const [postsArray, imagesArray] = createPostsSkeletons(dataArray)
//     const gridContainer = document.getElementById("posts-container");
//     if(gridContainer){
//       postsArray.forEach((post) => {
//         gridContainer.innerHTML += post;
//       });
//     }
//     //Adds images to the created skeletons
//     // addLazyLoadedImages(imagesArray, postsArray.length);
//   };

//   interface IPost {
//     id:string,
//     images: {
//       height: number, 
//       width: number,
//       animated: boolean,
//       id: string
//     }[],
//      title: string, 
//      ups: number, 
//      comment_count: number,
//       views:number,
//   }

//   interface IImage {
//     id: string,
//     image: {
//       height: number, 
//       width: number,
//       animated: boolean,
//       id: string
//     };
//   }
  
//   //Creates a post skeleton for each element in the dataArray
//   export const createPostsSkeletons = (dataArray:IPost[]) => {
//     let postsArray: JSX.Element[] = [];
//     let imagesArray: IImage[] = [];
//     dataArray.forEach((post) => {
//       let { id, images, title, ups, comment_count, views } = post;
//       if (views > 1000) {
//         // views = Math.floor(views / 1000) + "K";
//       }
//       if (images !== undefined) {
//         const image = images[0];
//         imagesArray.push({ id: post.id, image });
//         let { height, width, animated } = image;
//         const imageId = image.id;
//         postsArray.push(

//           <PostSkeleton            
//           id={id}
//           height={height}
//           width = {width}
//           title = {title}
//           votes = {ups}
//           comment_count = {comment_count}
//           views = {views}
//           animated = {animated}
//           imageId = {image.id}
//           count={images.length} ></PostSkeleton>
//           // )
//         );
//       }
//     });
    
//     return [postsArray, imagesArray];
//   };
  
//   //Gets gallery images from endpoint
//   export const getData = async (url: string) => {
//     let response = await fetch(url);
//     const responseJson = await response.json();
//     const dataArray = responseJson.data;
//     return dataArray;
//   };

//   //Gets an image based on its id
// const getImage = (id: string, imagesArray : IImage[]) => {
//   // let image: {
//   //   height: number;
//   //   width: number;
//   //   animated: boolean;
//   //   id: string;
//   // };
//   imagesArray.forEach((element) => {
//     if (element.id === id) {
//       return element.image;
//     }
//   });
// };

// // //Adds images to skeletons when they are in the viewport
// // const addLazyLoadedImages = (imagesArray: IImage[], postsLoaded: number) => {
// //   const gridContainer = document.getElementById("posts-container");
// //   if(gridContainer){
// //     const allPosts = Array.from(gridContainer.children);
// //     const posts = allPosts.slice(allPosts.length - postsLoaded, allPosts.length);
// //     const lazyLoad = (post :IPost) => {
// //       const io = new IntersectionObserver((entries, observer) => {
// //         entries.forEach((entry) => {
// //           if(entry.target instanceof HTMLElement && entry.target.firstChild && entry.target.firstChild.nextSibling){
// //             if (entry.isIntersecting) {
// //               const imageId = entry.target.id;
// //               const count = entry.target.dataset.count;
// //               const imageDiv = entry.target.firstChild.nextSibling;
// //               const objectFit = imageDiv.dataset.objectfit;
// //               const isVideo = imageDiv.dataset.animated;
// //               const imageLink = `https://i.imgur.com/${imageDiv.dataset.imageid}.jpg`;
// //               const image = getImage(imageId, imagesArray);
// //               if (isVideo == "true") {
// //                 if (imageDiv.innerHTML == "") {
// //                   if (localStorage.getItem("autoplayEnabled") == "false") {
// //                     imageDiv.innerHTML = `<img src="${imageLink}" id="image" class="image ${objectFit} w-full sm:w-[300px]"  data-height="${image.height}" data-width="${image.width}"/><div class="absolute top-4 right-4 uppercase font-medium  tracking-widest bg-tagColor-5 px-2 py-1 rounded-sm text-xs drop-shadow-[0_2px_5px_rgba(0,0,0,0.8)]">video</div>`;
// //                   } else {
// //                     imageDiv.innerHTML = `
// //                     <video id="image" class="image ${objectFit} w-full sm:w-[300px]"  data-height="${image.height}" data-width="${image.width}" autoplay muted>
// //                     <source src=${image.link} type="video/mp4">
// //                     </video>`;
// //                   }
// //                 }
// //               } else {
// //                 if (count == 1) {
// //                   imageDiv.innerHTML = `<img src="${image.link}" id="image" class="image ${objectFit} w-full sm:w-[300px]"  data-height="${image.height}" data-width="${image.width}"/>`;
// //                 } else {
// //                   imageDiv.innerHTML = `<img src="${image.link}" id="image" class="image ${objectFit} w-full sm:w-[300px]"  data-height="${image.height}" data-width="${image.width}"/>
// //                 <div class="absolute top-4 right-4 uppercase font-medium  tracking-widest bg-gray-800 px-2 py-1 rounded-sm text-xs drop-shadow-[0_2px_5px_rgba(0,0,0,0.8)]">${count}</div>`;
// //                 }
// //               }
// //               imageDiv.style = "";
// //               observer.disconnect();
// //             }
// //           }

// //         });
// //       });
// //       io.observe(post);
// //     };
// //     posts.forEach(lazyLoad);
// //   }

// // };

export {}
