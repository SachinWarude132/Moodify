import { createContext } from "react";
import { useState } from "react";
 
export const songContext = createContext()
 export const SongContextProvider  = ({children})=>{
     const [song, setSong] = useState()
     const [loading, setloading] = useState(false)


     return(
        <songContext.Provider 
        value = {{song ,setSong,loading,setloading}}>
            {children}
        </songContext.Provider>
     )
 }