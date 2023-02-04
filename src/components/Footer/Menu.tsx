
import styles from "./Footer.module.css"
interface Props {
    
}
 
const Menu: React.FC<Props> = () => {
    return (
        <div className={`hidden sm:flex ${styles.footer_items} w-3/4`}>
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
      );
}
 
export default Menu;