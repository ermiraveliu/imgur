interface MobileEngagementBarProps {
    
}
 
const MobileEngagementBar: React.FC<MobileEngagementBarProps> = () => {
    return ( 
        <div className="sticky z-10 flex justify-around items-center bottom-2 bg-gray-500 w-11/12 sm:w-1/2 rounded-xl mx-auto p-2 sm:hidden" >
        {/* style="box-shadow: 0 4px 4px 0 rgb(0 0 0 / 0.5)" */}
        <div className="w-10 h-9 p-0.5 flex justify-center items-center bg-gray-500 rounded-l previous-btn" id="previous-btn"><img src="../assets/previousPost.svg" alt=""/></div>
        <div className="flex justify-center items-center gap-3">
        <img src="../assets/upvote.svg" className="w-6 h-6" alt="" />
        <p className="text-white text-xs font-medium votes"></p>
        <img src="../assets/downvote.svg" className="w-6 h-6" alt=""/>
        </div>
        <img src="../assets/favorite.svg" className="w-6 h-6" alt="" />
        <div className="w-10 p-1 xl:w-20 rounded-r text-sm font-semibold tracking-wide flex items-center justify-center gap-1 shrink-0 next-btn" id="next-btn"><span className="hidden xl:block">Next</span> <img src="../assets/nextPost.svg" alt=""/></div>
        </div>
     );
}
 
export default MobileEngagementBar;