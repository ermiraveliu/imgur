interface LayoutProps {
    children:React.ReactNode;
}
 
const Layout: React.FC<LayoutProps> = ({children}) => {
    return ( 
        <>
        {children}
        <footer></footer>
        </>
    );
}
 
export default Layout;