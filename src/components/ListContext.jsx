import { createContext, useState } from "react";
 
const ListContext = createContext();
 
export function ListProvider({ children }) {
 
    const [lists, setLists] = useState([]);
 
    const addToList = (title, newList) => {
        setLists((lists) => [...lists, { title, list: newList }]);
    };
 
 
    return (
        <ListContext.Provider value={{ lists, addToList }}>
            {children}
        </ListContext.Provider>
    );
}

export default ListContext;