import { createContext } from "react";
export const StoreContext = createContext(null);
import { food_list } from '../../Images/assets';

const storeContextProvider = (props) => {



    const contextValue = {
        food_list
    }

    return (
        < StoreContext.Provider value={contextValue} >
            {props.children}
        </StoreContext.Provider >
    )

}


export default storeContextProvider;