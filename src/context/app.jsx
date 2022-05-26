import React, {createContext, useReducer, useContext} from 'react';

import AvinashReduicer, {initialState as avinashState} from '../pages/avinash/reducer';

export const AppContext = createContext();
export const AppProvider = ({children}) => {
    return (
        <AppContext.Provider
            value={{
                avinash: useReducer(AvinashReduicer, avinashState)
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useStateValue = () => useContext(AppContext);