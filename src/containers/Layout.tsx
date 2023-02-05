import React from "react";
import Footer from "../components/Footer/Footer";
import ScrollButton from "../components/Footer/ScrollButton";
import Header from "../components/Header/Header";


interface LayoutProps {
    children: React.ReactNode;
    backgroundColor: string;
    inGalleryPage: boolean
}
 
const Layout: React.FC<LayoutProps> = ({ children, backgroundColor, inGalleryPage }) => {
    // console.log(inGalleryPage)
    return ( 
        <div className="bg-gray-900" id="top">
            <Header backgroundColor={backgroundColor} inGalleryPage={ inGalleryPage } />    
            {children}
            <Footer />
            <ScrollButton/>
        </div>
    );
}
 
export default Layout;