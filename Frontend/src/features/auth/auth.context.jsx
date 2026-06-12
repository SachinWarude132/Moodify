import { createContext, useState } from "react";

export const context = createContext()

export const  ContextProvider = ({children})=>{

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    

    return(
        <context.Provider value={{user ,setUser,loading,setLoading}}>
            {children}
        </context.Provider>
    )



}