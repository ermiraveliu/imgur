import { useContext, useEffect } from "react";
import { PageContext } from "../../context/PageContext";
import Buttons from "./Buttons";
import Left from "./Left";
import LogoButton from "./LogoButton";
import Search from "./Search";


interface HeaderProps {
    backgroundColor: string;
}
 
const Header: React.FC<HeaderProps> = ({ backgroundColor }) => {

    
    const { isVisible, setIsVisible } = useContext<any>(PageContext)
    const { page } = useContext<any>(PageContext)

    useEffect(() => {

        const thisPage = page;
        console.log(thisPage)
        window.addEventListener("scroll", () => {
            const scrollPosition: number = window.scrollY
            
            if (thisPage === 'home') {
                if (scrollPosition <= 240) {
                    setIsVisible(false)
                } else {
                    setIsVisible(true)
                }
            }

            if (thisPage === 'gallery') {
                if (scrollPosition <= 72) {
                    setIsVisible(false)
                } else {
                    setIsVisible(true)
                }
            }

            if (thisPage === 'user') {
                if (scrollPosition <= 240) {
                    setIsVisible(false)
                } else {
                    setIsVisible(true)
                }
            }
        })
    })

    return (
        <header style={{
            position: isVisible ? `sticky`: `relative`,
            backgroundImage: isVisible && page==='home' ? `url(http://localhost:3000/static/media/Press_Page.ef7f6733684816441796.jpg)` : 'none',
            zIndex: page==='gallery' ? `100`: undefined,
        }} className={`flex p-4 justify-between top-0 z-10 bg-${backgroundColor} bg-cover bg-no-repeat bg-center`}>
            <LogoButton/>
            <Left />
            <Search />
            <Buttons />
        </header>
    ) 
 
}

 
export default Header;