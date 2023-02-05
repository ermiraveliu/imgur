import { useContext } from "react";
import { PageContext } from "../../context/PageContext";

interface Props {
}
 
const LogoButton: React.FC<Props> = () => {
  const {isVisible, setIsVisible} = useContext<any>(PageContext)

    return ( 
        <a href={"/"} className="logoImg absolute" style={{visibility: isVisible?'visible': 'hidden'}}>
        <img
          src="https://s.imgur.com/images/favicon-32x32.png"
          alt=""
          className=""
        />
      </a>
     );
}
 
export default LogoButton;