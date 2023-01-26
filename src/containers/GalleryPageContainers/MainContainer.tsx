interface MainContainerProps {
    children: React.ReactNode
}
 
const MainContainer: React.FC<MainContainerProps> = ({children}) => {
    return ( 
        <div className="w-full flex justify-center h-full">
            {children}
        </div>
     );
}
 
export default MainContainer;