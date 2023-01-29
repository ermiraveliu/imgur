interface TitleSkeletonProps {
    
}
 
const TitleSkeleton: React.FC<TitleSkeletonProps> = () => {
    return ( 
        <div className="hidden sm:block">
        <div className="post-title flex items-start justify-between gap-4">
          <div className="text-white w-full text-2xl lg:text-3xl mb-3 font-bold title">
            <div className="w-2/3 bg-[rgba(0,0,0,.3)] h-8 animate-pulse"></div>
          </div>
        </div>
          <div className="flex gap-2 w-full mb-5">
            <img className="img w-8 h-8 rounded-full bg-lighterGreen animate-pulse hover:scale-110 avatar" alt=""/>
            <div className=" flex justify-between w-full items-center">
                <div>
                    <div className="text-btnColor-1 account_name text-xs tracking-wide font-semibold">
                      <div className="w-14 bg-[rgba(0,0,0,.3)] h-3 animate-pulse mb-1"></div>
                    </div>
                    <div className="text-gray-200 flex gap-1  text-xs font-medium">
                        <div className="views">                        
                        <div className="w-16 bg-[rgba(0,0,0,.3)] h-3 animate-pulse">
                        </div>
                      </div>
                        <span> &#8226;</span>
                        <span id="post_age">                        
                          <div className="w-10 bg-[rgba(0,0,0,.3)] h-3 animate-pulse">
                          </div>
                        </span>
                    </div>
                </div>
            </div>
          </div>
        </div>
     );;
}
 
export default TitleSkeleton;