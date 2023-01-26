interface EngagementBarProps {
    
}
 
const EngagementBar: React.FC<EngagementBarProps> = () => {
    return (
        <div className="flex-col flex-grow-0 flex-shrink-0 items-center text-white hidden sm:flex">
        <div className="sticky top-80">
            <div className="flex relative">

            <div>

              <div
              className="flex flex-col w-full gap-4 border border-gray-500 rounded py-2 px-4 items-center mb-7"
            >
            <div className="flex shrink-0">
              <svg width="32" height="32" viewBox="0 0 32 32" className="upvote" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Upvote</title><path fill="none" stroke="#ffffff" fill-rule="evenodd" clip-rule="evenodd" stroke-width="2"  d="M14.8505 7.71282C15.5179 7.12573 16.4821 7.12573 17.1495 7.71282C17.9307 8.39996 19.1203 9.49532 20.75 11.125C22.4432 12.8182 23.6614 14.2739 24.44 15.28C24.9219 15.9028 24.4732 16.75 23.6857 16.75H20V23.0316C20 23.7799 19.5634 24.435 18.8251 24.5568C18.1981 24.6603 17.2841 24.75 16 24.75C14.7159 24.75 13.8019 24.6603 13.1749 24.5568C12.4366 24.435 12 23.7799 12 23.0316V16.75H8.31433C7.52677 16.75 7.07806 15.9028 7.56004 15.28C8.33861 14.2739 9.55681 12.8182 11.25 11.125C12.8797 9.49532 14.0693 8.39996 14.8505 7.71282Z"></path></svg>
            </div>   

              <div className="votes text-xs font-semibold">
                <div className="w-8 h-4 bg-[rgba(0,0,0,.1)] animate-pulse"></div>
              </div>
              <svg width="32" height="32" viewBox="0 0 32 32" className="downvote" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Downvote</title><path fill="none" stroke="#ffffff" fill-rule="evenodd" clip-rule="evenodd" stroke-width="2" d="M17.1495 24.2872C16.4821 24.8743 15.5179 24.8743 14.8505 24.2872C14.0693 23.6 12.8797 22.5047 11.25 20.875C9.55681 19.1818 8.33861 17.7261 7.56005 16.72C7.07806 16.0972 7.52677 15.25 8.31433 15.25L12 15.25L12 8.96842C12 8.2201 12.4366 7.56497 13.1749 7.44316C13.8019 7.33973 14.7159 7.25 16 7.25C17.2841 7.25 18.1981 7.33973 18.8251 7.44317C19.5634 7.56497 20 8.2201 20 8.96842L20 15.25L23.6857 15.25C24.4732 15.25 24.9219 16.0972 24.44 16.72C23.6614 17.7261 22.4432 19.1818 20.75 20.875C19.1203 22.5047 17.9307 23.6 17.1495 24.2872Z"></path></svg>

              <svg width="32" height="32" viewBox="0 0 32 32" className="favorite" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Add to Favorites</title><path fill="none" stroke="#ffffff" stroke-width="2" d="M20.0449 8.25C18.3743 8.25 16.8978 9.21911 16 10.4871C15.1024 9.21911 13.6258 8.25 11.9551 8.25C9.2185 8.25 7 10.4702 7 13.209C7 16.082 9.07109 19.5814 14.9328 23.5493C15.5767 23.9852 16.4233 23.9852 17.0672 23.5493C22.9289 19.5814 25 16.082 25 13.209C25 10.4702 22.7816 8.25 20.0449 8.25Z"></path></svg>
            </div>

            <img src="../assets/share.svg" alt="" className="mb-7 mx-auto" />
            <div
              className="flex flex-col gap-4 border border-gray-500 rounded py-2 px-4 items-center"
            >
              <a href="#comments"><img src="../assets/comments.svg"/></a>
              <div className="comment-count text-xs font-semibold">
                <div className="w-8 h-4 bg-[rgba(0,0,0,.1)] animate-pulse"></div>
              </div>
            </div>
            </div>


            <div className="absolute w-[400px] h-44 left-[55px] -top-16 hidden pl-32 pr-20 py-4 transition-all" id="upvote-banner">
              <p className="text-lg font-bold">Up and away!</p>
              <p className="text-sm pt-2">Sign up to upvote the posts you like and make them more popular.</p>
              <div className="flex pt-4 font-bold gap-4">
                  <button className=" rounded-full px-4 py-1 su-gradient hover:-translate-y-1 transition-all"><a href="./signUp.html">Sign up</a></button>
                  <button className="hover:-translate-y-1 transition-all"><a href="./login.html">Sign in</a></button>
              </div>
            </div>

            <div className="absolute w-[400px] h-44 left-[55px] top-4 hidde pl-32 pr-20 py-4 hidden transition-all" id="downvote-banner">
              <p className="text-lg font-bold">Beg to differ?</p>
              <p className="text-sm pt-2">Sign up to downvote the posts that rub you the wrong way.</p>
              <div className="flex pt-4 font-bold gap-4">
                  <button className=" rounded-full px-4 py-1 su-gradient hover:-translate-y-1 transition-all"><a href="./signUp.html">Sign up</a></button>
                  <button className="hover:-translate-y-1 transition-all"><a href="./login.html">Sign in</a></button>
              </div>
            </div>

            <div className="absolute w-[400px] h-44 left-[55px] top-16 hidde pl-32  py-4 hidden transition-all" id="favorite-banner">
              <p className="text-lg font-bold">Fave and Never Forget</p>
              <p className="text-sm pt-2 pr-20">Sign up to save your favorite posts to your profile.</p>
              <div className="flex pt-4 font-bold gap-4">
                  <button className=" rounded-full px-4 py-1 su-gradient hover:-translate-y-1 transition-all"><a href="./signUp.html">Sign up</a></button>
                  <button className="hover:-translate-y-1 transition-all"><a href="./login.html">Sign in</a></button>
              </div>
            </div>
            
            </div>
        </div>
      </div>
    );
}
 
export default EngagementBar;