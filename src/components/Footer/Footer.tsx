import styles from "./Footer.module.css"
import FooterMenu from "./FooterMenu";
import Menu from "./Menu";
import GetAppButton from "./GetAppButton";
import { useEffect, useRef, useState } from "react";

interface Props {
    
}
 
const Footer: React.FC<Props> = () => {
  const footer = useRef(null)

  const [scrollDown, setScrollDown] = useState<boolean>()
  
  useEffect(() => {
        const handleScroll = () => {
          const scrollPosition =
        document.body.scrollTop || document.documentElement.scrollTop;
          if (scrollPosition === 0) {
            setScrollDown(false);
          } else {
            setScrollDown(true);
          }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
  }, [footer]);
  

    return ( 
      <footer ref={footer} className={`${styles.footer} w-full relative pl-6 sm:pl-[50px]`} style={{
        transform: scrollDown ? `translate3d(0, 60px, 0)` : undefined,
        transition: 'transform .8s',
        }}>
            <Menu/>
            <FooterMenu />
            <GetAppButton/>
        </footer>
     );
}
 
export default Footer;