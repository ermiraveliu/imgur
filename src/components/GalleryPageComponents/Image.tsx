interface ImageProps {
    
}
 
const Image: React.FC<ImageProps> = () => {
    return ( 
        <>
        <div id = "images">
            <div id="d-0">
            <div className="h-[500px] bg-[rgba(0,0,0,.1)] my-3" id="image-0"></div>
            <div className="p-4 hidden sm:block text-white text-sm tracking-wider break-all" id="description-0"></div>
            </div>
       </div>
       <div className="sm:hidden text-xs font-medium p-4 flex gap-1">
            <div className="text-gray-200 views"></div>
            <span className="text-white" id="showTags"></span>
        </div>
        </>
     );
}
 
export default Image;