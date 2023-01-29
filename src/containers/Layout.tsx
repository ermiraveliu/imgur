interface LayoutProps {
    children:React.ReactNode;
}
 
const Layout: React.FC<LayoutProps> = ({children}) => {
    return ( 
        <div className="bg-gray-900" id="top">
        {children}
        <footer></footer>
        </div>
    );
}
 
export default Layout;