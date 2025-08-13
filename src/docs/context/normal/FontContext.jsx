import React, { createContext } from 'react';

export const FontContext = createContext({
    state: {fontSize : ""},
    actions : { setFontSize: () => {}}
})

const FontSizeProvider =( {children}) => {
    const [fontSize, setFontSize] = useState("40px")
    const value = {
        state: {fontSize : fontSize},
        actions : {setFontSize : setFontSize}
    }
    return (
        <FontContext.Provider value={value}>
            {children}
        </FontContext.Provider>
    )
}

