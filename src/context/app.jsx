import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux'

import AvinashReduicer from '../pages/avinash/reducer';


export const store = createStore(AvinashReduicer);
export const AppProvider = ({children}) => {
    return (
        <Provider store={store} >
            {children}
        </Provider>
    )
}