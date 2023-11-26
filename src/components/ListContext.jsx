import { createContext, useEffect, useState } from "react";
 
const ListContext = createContext();
 
export function ListProvider({ children }) {
 
    const [lists, setLists] = useState([]);
 
    useEffect(()=>{
        const savedLists = JSON.parse(localStorage.getItem("lists"));
        if(savedLists){
            setLists(savedLists)
        }
    },[])
    
      const addToList = (title, newList) => {
        const updatedLists = [...lists, { title, list: newList }];
        setLists(updatedLists);
      
        localStorage.setItem("lists", JSON.stringify(updatedLists));
      };
 
    return (
        <ListContext.Provider value={{ lists, addToList }}>
            {children}
        </ListContext.Provider>
    );
}

export default ListContext;