import { useContext,useState,createContext } from "react";


const FavoriteContext = createContext(null);

export const FavoriteProvider = ({children})=>{
    const[favorites,setFavorites] = useState([]);
    console.log(favorites);

    
    return <FavoriteContext.Provider value={{favorites,setFavorites}}>{children}</FavoriteContext.Provider>

}

export const useFavorite =()=> useContext(FavoriteContext);