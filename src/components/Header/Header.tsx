import { useEffect, useState } from "react";
import Buttons from "./Buttons";
import Left from "./Left";
import LogoButton from "./LogoButton";
import Search from "./Search";


interface HeaderProps {
    backgroundColor: string;
    inGalleryPage: boolean;
}
 
const Header: React.FC<HeaderProps> = ({ backgroundColor, inGalleryPage }) => {

    // const [inGalleryPage, setInGalleryPage] = useState<boolean>(false);
    console.log(inGalleryPage)
    const [isVisible, setIsVisible] = useState<boolean>(false)
    useEffect(() => {
        const page = inGalleryPage
        window.addEventListener("scroll", () => {
            const scrollPosition:number =
                window.scrollY
            if (!page) {  
                if (scrollPosition <= 240) {
                    setIsVisible(false)
                } else {
                    setIsVisible(true)
                }
            }

            if(page) {
                if (scrollPosition <= 72) {
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
            backgroundImage: isVisible && !inGalleryPage ? `url(http://localhost:3000/static/media/Press_Page.ef7f6733684816441796.jpg)` : 'none',
            zIndex: inGalleryPage? `100`: undefined,
        }} className={`flex p-4 justify-between top-0 z-10 bg-${backgroundColor} bg-cover bg-no-repeat bg-center`}>
            <LogoButton isVisible={ isVisible } />
            <Left isVisible={ isVisible } />
            <Search  isVisible={ isVisible } inGalleryPage={ inGalleryPage } />
            <Buttons isVisible={ isVisible } inGalleryPage={ inGalleryPage } />
        </header>
    ) 

    
}

 
export default Header;