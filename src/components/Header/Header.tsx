// import { useEffect, useState, useRef } from "react";
import Buttons from "./Buttons";
import Left from "./Left";
import Search from "./Search";



interface HeaderProps {
    
}
 
const Header: React.FC<HeaderProps> = () => {
    // const tagContainer = useRef(null)
    // const [isVisible, setIsVisible] = useState(false)


    // useEffect(() => {
    //     const headerObserver:any = new IntersectionObserver((entries:any) => {
    //         const [entry] = entries
    //         setIsVisible(entry.isIntersecting)
    //     })
    //     headerObserver.observe(tagContainer)      
    // })

    return ( 
        <header className="flex p-4 justify-between sticky top-0 z-10">
            <Left />
            <Search />
            <Buttons />
        </header>
     );
}





 
export default Header;