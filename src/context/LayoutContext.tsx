import React, { createContext, useState } from "react";
import Layout from "../containers/Layout";

interface LayoutContextProps {
    layout : "waterfall" | "uniform",
    setLayout : (layout: "waterfall" | "uniform" ) => void
}

export const LayoutContext = createContext<LayoutContextProps>({
    layout: "waterfall", 
    setLayout : (layout) => {}
})

interface LayoutContextProviderProps {
    children: React.ReactNode;
}
 
const LayoutContextProvider: React.FC<LayoutContextProviderProps> = ({children}) => {
    const[layout, setLayout] = useState<"waterfall" | "uniform">(
        "waterfall" 
    );
    return ( 
        <LayoutContext.Provider value = {{layout, setLayout}}>
            {children}
        </LayoutContext.Provider>
     );
}
 
export default LayoutContextProvider;