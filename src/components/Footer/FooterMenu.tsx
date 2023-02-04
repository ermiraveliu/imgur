import styles from "./Footer.module.css";
interface Props {
    
}
 
const FooterMenu: React.FC<Props> = () => {
    return (
        <div className="hidden sm:flex">
            <div id="ellipsis" className="ellipsis bg-gray-800 items-center gap-1 px-2.5 lg:hidden absolute z-10  top-0 bottom-0 hidden">
                <div className="circle h-1.5 w-1.5 bg-gray-200 rounded-full"></div>
                <div className="circle h-1.5 w-1.5 bg-gray-200 rounded-full"></div>
                <div className="circle h-1.5 w-1.5 bg-gray-200 rounded-full"></div>
                <div className={`${styles.footer_menu} invisible px-4 py-2 rounded-md w-auto h-auto absolute bottom-11 -left-5 text-white`}>
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
      );
}
 
export default FooterMenu;