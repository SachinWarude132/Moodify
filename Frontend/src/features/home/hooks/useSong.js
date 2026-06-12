import { getSong } from "../service/song.api";
import {  useContext } from "react";
import { songContext } from "../song.context";

export const useSong = ()=>{
    const context  = useContext(songContext)
    const {song ,setSong,loading,setLoading} = context

    async function HandleSong(mood) {
    

    const data = await getSong({ mood })



    setSong(data.song)
}
    return(
        {
            song,loading,HandleSong
        }
    )
}