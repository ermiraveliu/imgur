interface MobileTitleProps {
    
}
 
const MobileTitle: React.FC<MobileTitleProps> = () => {
    return ( 
        <div className="relative flex items-center gap-2 p-2 bg-gray-900 w-full sm:hidden">
        <img className="bg-lighterGreen shrink-0 w-8 h-8 rounded-full basis-[32px] animate-pulse avatar" alt="" />
        <div className="flex flex-col gap-1 font-medium">
        <p className="text-white text-sm tracking-wide font-medium break-normal title "></p>
        <p className="text-gray-200 text-xs account_name"></p>
        </div>
      </div>
     );
}
 
export default MobileTitle;