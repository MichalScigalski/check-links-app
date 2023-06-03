import { createContext, useState } from "react";

export const UserContext = createContext({
    user: {},
    setUser: () => {}
})

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState({})
    const value = { user, setUser}

    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    )
}