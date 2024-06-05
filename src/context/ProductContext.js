// create - contextApi ke andar ek section hai consumer uhsko simple bnane ke ley hum use krte hai useContext
// provider
// consumer = > useContext Hook

import { createContext, useContext, useReducer} from "react";
import reducer from '../reducer/productReducer'

const AppContext = createContext();

const initialState = {
    isLoading : false,
    isError : false,
    Data:{},
}


const AppProvider = ({children})=>{
    //useReducer
    const [state,dispatch] = useReducer(reducer,initialState)

    return <AppContext.Provider value={{...state}}>
        {children}
    </AppContext.Provider>
}

// Custom hook
// jab ise khi use kar rhe hai to hume baar baar const myName = useContext(AppContext) ye likna pad rha hai
const useProductContext = () =>{
    return useContext(AppContext);
}

export {AppProvider,AppContext , useProductContext};