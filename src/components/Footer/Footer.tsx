interface Props {
    
}
 
const Footer: React.FC<Props> = () => {
    return ( 
        <>
        <div className="hidden sm:flex footer-items w-3/4">
        <p className=""><b>	&copy; 2023 Imgur, Inc </b></p>
        <a className="hidden sm:block" href="https://imgurinc.com/about">About</a>
        <a className="hidden sm:block" href="https://imgur.com/tos">Terms</a>
        <a className="hidden sm:block" href="https://imgur.com/privacy">Privacy</a>
        <a className="hidden md:block" href="https://imgur.com/rules">Rules</a>
        <a className="hidden md:block" href="https://help.imgur.com/hc/en-us">Help</a>
        <a className="hidden lg:block" href="https://imgur.com/emerald">Emerald</a>
        <a className="hidden lg:block" href="https://www.imgurstore.com">Store</a>
        <a className="hidden lg:block" href="https://imgurinc.com/advertise">Advertise</a>
        <a className="hidden lg:block" href="https://blog.imgur.com">Blog</a>
        <a className="hidden xl:block" href="https://imgurinc.com/community-resources">Wellness</a>
        <a className="hidden xl:block" href="https://imgur.com/ccpa">CCPA</a>
        <a className="hidden xl:block" href="https://apidocs.imgur.com">API</a>
        </div>

        <div className="hidden sm:flex">
        <div id="ellipsis" className="ellipsis bg-gray-800 items-center gap-1 px-2.5 lg:hidden absolute z-10  top-0 bottom-0 hidden">
        <div className="circle h-1.5 w-1.5 bg-gray-200 rounded-full"></div>
        <div className="circle h-1.5 w-1.5 bg-gray-200 rounded-full"></div>
        <div className="circle h-1.5 w-1.5 bg-gray-200 rounded-full"></div>

        <div className="footer-menu invisible px-4 py-2 rounded-md w-auto h-auto absolute bottom-11 -left-5 text-white">
        <a className="md:hidden" href="https://imgur.com/rules">Rules</a>
        <a className="md:hidden" href="https://help.imgur.com/hc/en-us">Help</a>
        <a className="hidden lg:block" href="https://imgur.com/emerald">Emerald</a>
        <a className=" lg:hidden" href="https://www.imgurstore.com">Store</a>
        <a className=" lg:hidden" href="https://imgurinc.com/advertise">Advertise</a>
        <a className=" lg:hidden" href="https://blog.imgur.com">Blog</a>
        <a className=" xl:hidden" href="https://imgurinc.com/community-resources">Wellness</a>
        <a className=" xl:hidden" href="https://imgur.com/ccpa">CCPA</a>
        <a className=" xl:hidden" href="https://apidocs.imgur.com">API</a>
        </div>
        </div>
        </div>

        <button className="footer-app absolute right-0 top-0">
        <a href="https://imgurinc.com/mobileapps"><b>Get the App</b></a>
        </button>
        </>
     );
}
 
export default Footer;