import { useRef, useEffect } from "react";
import styles from "./Footer.module.css"
interface Props {

}
 
const GetAppButton: React.FC<Props> = () => {
    // const buttonRef = useRef(null);
    // const button:any = buttonRef.current
    // useEffect(() => {
    //     if(footer.style.bottom === '-60px'){
    //         button.style.bottom = "20px"
    //     } else {
    //         button.style.bottom = "-60px"
    //     }
    // })

    return ( 
        <button  className={`${styles.footer_app} absolute right-0 top-0`}>
            <a href="https://imgurinc.com/mobileapps"><b>Get the App</b></a>
        </button>
     );
}
 
export default GetAppButton;