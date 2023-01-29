interface SidebarSkeletonProps {
    
}
 
const SidebarSkeleton: React.FC<SidebarSkeletonProps> = () => {
    return ( 
        <div>
          <div id="sidebar-posts" className="max-h-[300px] overflow-y-auto">
            <div className="flex items-center w-full my-3">
              <div className="rounded w-[64px] h-[64px] mr-3 bg-[rgba(0,0,0,.2)] shrink-0 animate-pulse"></div>
                <div className="flex w-full flex-col gap-2">
                  <p className="bg-[rgba(0,0,0,.2)] animate-pulse w-11/12 h-4"></p>
                  <p className="bg-[rgba(0,0,0,.2)] animate-pulse w-3/4 h-4"></p>
                </div>
              </div>
            <div className="flex items-center w-full my-3">
              <div className="rounded w-[64px] h-[64px] mr-3 bg-[rgba(0,0,0,.2)] animate-pulse shrink-0"></div>
                <div className="flex w-full flex-col gap-2">
                  <p className="bg-[rgba(0,0,0,.2)] animate-pulse w-11/12 h-4"></p>
                  <p className="bg-[rgba(0,0,0,.2)] animate-pulse w-3/4 h-4"></p>
                </div>
              </div>
            <div className="flex items-center w-full my-3">
              <div className="rounded w-[64px] h-[64px] mr-3 bg-[rgba(0,0,0,.2)] animate-pulse shrink-0"></div>
                <div className="flex w-full flex-col gap-2">
                  <p className="bg-[rgba(0,0,0,.2)] animate-pulse w-11/12 h-4"></p>
                  <p className="bg-[rgba(0,0,0,.2)] animate-pulse w-3/4 h-4"></p>
                </div>
              </div>
            <div className="flex items-center w-full my-3">
              <div className="rounded w-[64px] h-[64px] mr-3 bg-[rgba(0,0,0,.2)] animate-pulse shrink-0"></div>
                <div className="flex w-full flex-col gap-2">
                  <p className="bg-[rgba(0,0,0,.2)] animate-pulse w-11/12 h-4"></p>
                  <p className="bg-[rgba(0,0,0,.2)] animate-pulse w-3/4 h-4"></p>
                </div>
              </div>
          </div>
        </div>
     );
}
 
export default SidebarSkeleton;