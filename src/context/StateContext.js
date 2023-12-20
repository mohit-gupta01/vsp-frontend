import React, { createContext, useContext, useState } from 'react';

const Context = createContext();

export const StateContext = ({ children }) => {
    const [showTrackingDetails, setShowTrackingDetails] = useState(0);
    return (
        <Context.Provider value={{
            showTrackingDetails, setShowTrackingDetails
        }}>
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context);
