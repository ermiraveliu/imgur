interface ContentContainerProps {
    children: React.ReactNode
}
 
const ContentContainer: React.FC<ContentContainerProps> = ({children}) => {
    return (
        <div className="mx-0 px-0 w-full sm:mx-6 sm:px-6 md:ml-4">
            {children}</div>

    );
}
 
export default ContentContainer;