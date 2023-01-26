interface SidebarProps {
    
}
 
const Sidebar: React.FC<SidebarProps> = () => {
    return ( 
        <div className="flex relative pb-36">
        <div className="sidebar sticky top-72 hidden h-[260px] flex-grow-0 flex-shrink-0 basis-[300px] lg:block lg:w-[300px]">
          <p className="text-white text-xs font-semibold tracking-wider uppercase">
            Newest in most viral
          </p>
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
        </div>
     );
}
 
export default Sidebar;