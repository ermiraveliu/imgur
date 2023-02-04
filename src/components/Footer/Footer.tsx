import styles from "./Footer.module.css"
import FooterMenu from "./FooterMenu";
import Menu from "./Menu";
import GetAppButton from "./GetAppButton";
import { useEffect, useRef } from "react";

interface Props {
    
}
 
const Footer: React.FC<Props> = () => {
    const footerRef = useRef(null)
    const footer:any = footerRef.current

    useEffect(() => {
        const handleScroll = () => {
          const scrollPosition =
        document.body.scrollTop || document.documentElement.scrollTop;
          if (scrollPosition > 0) {
            footer.style.bottom = "-60px";
            // arrowup.style.bottom = "20px";
          } else {
            footer.style.bottom = "0px";
            // arrowup.style.bottom = "-60px";
          }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, [footer]);
    return ( 
        <footer ref={footerRef} className={`${styles.footer} w-full relative pl-6 sm:pl-[50px]`}>
            <Menu/>
            <FooterMenu />
            <GetAppButton/>
        </footer>
     );
}
 
export default Footer;