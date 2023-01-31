import React, { createContext, useState } from "react";

interface AutoplayContextProps {
    autoplay: boolean;
    setAutoplay: (autoplay: boolean) => void
}
 
export const AutoplayContext = createContext<AutoplayContextProps>({
    autoplay: false,
    setAutoplay: (autoplay:boolean) => {}
});
 
interface AutoplayContextProviderProps {
    children: React.ReactNode
}
 
const AutoplayContextProvider: React.FC<AutoplayContextProviderProps> = ({children}) => {

    const [autoplay, setAutoplay] = useState<boolean>(false);
    return ( 
        <AutoplayContext.Provider value={{autoplay, setAutoplay}}>
            {children}
        </AutoplayContext.Provider>
     );
}
 
export default AutoplayContextProvider;
