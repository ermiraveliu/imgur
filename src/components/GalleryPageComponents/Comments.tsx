interface CommentsProps {
    
}
 
const Comments: React.FC<CommentsProps> = () => {
    return ( 
        <>
         <div 
             className="flex justify-between items-center border border-gray-500 rounded py-2.5 px-4 w-full mt-4 mb-12" id="sign-in-to-comment">
           <p className="text-gray-200 text-xs sm:text-sm">Sign in to leave a comment</p>
           <div className="flex gap-2 text-white font-semibold text-xs">
            <button className="tracking-wider"> <a href="./login.html">Sign in</a></button>
            <button className="bg-btnColor-1 px-2 py-1 rounded-md tracking-wider"><a href="./signUp.html">Sign up</a></button>
          </div>
        </div> 
        
        <div  className="flex flex-col justify-between items-center border border-gray-500 rounded w-full mt-4 mb-12 text-gray-100 hidden"  id="leave-a-comment">
           <textarea className="bg-gray-700 w-full resize-none p-2  outline-none text-sm  placeholder-gray-100"  placeholder="Write a comment"></textarea>
           <div className="flex justify-between items-center w-full p-2 text-xs">
            <a href="https://imgur.com/rules" className=" hover:text-btnColor-1">Read community rules</a>
            <button className="py-1 px-4 bg-gray-700 rounded font-semibold" id="post-comment" disabled>Post</button>
           </div>
        </div>


         <div className="comments hidden sm:block">
            <div className="flex justify-between">
            <div className="text-white flex gap-2 text-base font-medium uppercase">
              <div className="comment-count" >
                <div className="w-8 h-3 bg-[rgba(0,0,0,.1)] animate-pulse"></div>
              </div>
              comments</div>

 
              <div className="flex gap-3 font-medium" >
                <div className="flex gap-1 cursor-pointer text-gray-100 hover:text-white expandAll" ><span>Expand All</span><img src="../assets/expand.svg" alt=""/></div>
                <div className="gap-1 cursor-pointer text-gray-100 hover:text-white hidden" id="collapse-all"><span>Collapse All</span><img src="../assets/collapse.svg" alt=""/></div>
              </div>
             </div>
             <div className="bg-gray-900 h-px w-full my-2 sm:bg-gray-500"></div>
          </div> 

          <div className="bg-gray-800 px-2 text-white sm:bg-gray-900 sm:px-0">
            <p className="uppercase text-xs text-gray-200 py-4 sm:hidden">Best Comments</p>


           <div id="comments">
           </div>

          {/* <!-- Load more comments button --> */}
          <div className="hidden sm:flex justify-center items-center pt-4">
            <button className="relative mx-auto border-blue border-2 px-4 py-2 rounded-sm group" id="load-more-comments">
              <div className="absolute inset-0 scale-0 bg-blue group-hover:scale-100 transition-all 4s"></div>
              <p className="relative z-10">Load more comments</p>
            </button>
          </div>

          </div>
          </>
     );
}
 
export default Comments;