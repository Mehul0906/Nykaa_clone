import { createContext, useState } from "react";

export const ContextApi = createContext()

export function ContextApiProvider({children}){
    const [showLogin, setShowLogin] = useState(false)
    return <ContextApi.Provider value={{showLogin, setShowLogin}}>{children}</ContextApi.Provider>
}