import React, { createContext, useState } from 'react';

export const GuideContext = createContext();
const GuideContextProvider = (props) => {
    const [select, setSelect] = useState("DropDown");

    console.log('select', select)
    return (
        <GuideContext.Provider value={{ select, setSelect }}>
            {props.children}
        </GuideContext.Provider>
    )
}
export default GuideContextProvider;