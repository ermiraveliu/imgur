import React, { createContext, useEffect, useState } from "react";

interface PageContextProps {
    page: string;
    setPage: (autoplay: string) => void;
    isVisible: boolean,
    setIsVisible: (isVisible: boolean) => void;
    
}
 
export const PageContext = createContext<PageContextProps>({
    page: '',
    setPage: (page: string) => { },
    isVisible: false,
    setIsVisible: (isVisible: boolean) => { },

});
 
interface PageContextProviderProps {
    children: React.ReactNode
}
 
const PageContextProvider: React.FC<PageContextProviderProps> = ({children}) => {

    const [page, setPage] = useState<string>('');
    const [isVisible, setIsVisible] = useState<boolean>(false);


    return ( 
        <PageContext.Provider value={{page, setPage, isVisible, setIsVisible}}>
            {children}
        </PageContext.Provider>
     );
}
 
export default PageContextProvider;
