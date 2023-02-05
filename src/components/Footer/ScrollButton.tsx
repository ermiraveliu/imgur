import styles from "./Footer.module.css"
import { useEffect, useState, useRef } from "react";
interface Props {
    
}
 
const ScrollButton: React.FC<Props> = () => {

      const button = useRef<any>(null)
      const [scrollDown, setScrollDown] = useState<boolean>(false)

      useEffect(() => {
        const handleScroll = () => {
          const scrollPosition =
        document.body.scrollTop || document.documentElement.scrollTop;
          if (scrollPosition > 0) {
            setScrollDown(true);
          } else {
            setScrollDown(false);
          }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
    }, [button]);


    return ( 
        <div ref={button} className="sm:block" onClick={() => {
            window.scrollTo(0,0)
      }} style={{
        transform: !scrollDown ? `translate3d(0, 60px, 0)` : undefined,
      }}>
        <button id={styles.scroll_btn} className={`${styles.scroll_btn} z-10`}>
            <svg
            fill="#ffffff"
            version="1.1"
            id="icon"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="40px"
            height="40px"
            viewBox="-9.6 -9.6 51.20 51.20"
            xmlSpace="preserve"
            stroke="#ffffff"
            stroke-width="0.00032"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0">
              <rect
                className="hidden sm:block"
                x="-9.6"
                y="-9.6"
                width="51.20"
                height="51.20"
                rx="7.68"
                fill="#474a51"
                strokeWidth={0}
              ></rect>
            </g>
            <g id="SVGRepo_iconCarrier">
              <title>up-to-top</title>
              <polygon
                points="16,14 6,24 7.4,25.4 16,16.8 24.6,25.4 26,24 "
              ></polygon>
              <rect x="4" y="8" width="24" height="2"></rect>
              <rect
                id="_Transparent_Rectangle_"
                className="st0 hidden sm:block"
                width="30"
                height="30"
              ></rect>
            </g>
          </svg>
          <p>Move to the top</p>
        </button>
      </div>
     );
}
 
export default ScrollButton;