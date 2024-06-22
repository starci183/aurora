import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react"

interface LayoutContextValue {
    states: {
        darkModeState: [boolean, Dispatch<SetStateAction<boolean>>]
    }
}

export const LayoutContext = createContext<LayoutContextValue | null>(null)

export const LayoutContextProvider = ({children}: {children: ReactNode}) => {
    const darkModeState = useState(false)
    return (
        <LayoutContext.Provider value={{states: {
            darkModeState
        }}}>
            {children}
        </LayoutContext.Provider>
    )
}