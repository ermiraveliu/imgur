import Buttons from "./Buttons";
import Left from "./Left";
import Search from "./Search";


interface HeaderProps {
    backgroundColor: string;
}
 
const Header: React.FC<HeaderProps> = ({ backgroundColor }) => {

    return (
        <header className={`flex p-4 justify-between sticky z-10 bg-${backgroundColor}`}>
            <Left />
            <Search />
            <Buttons />
        </header>
    ) 

    
}





 
export default Header;