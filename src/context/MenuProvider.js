import { createContext, useState } from "react";

export const MenuContext = createContext(null);

const MenuProvider = ({children}) =>{
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const menuData = {
        isMenuOpen,
        setIsMenuOpen
    }
    return(
        <MenuContext.Provider value={menuData}>
            {children}
        </MenuContext.Provider>
    )
}
export default MenuProvider;