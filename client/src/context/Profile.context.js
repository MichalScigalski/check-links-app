import { createContext, useState } from "react";

export const ProfileContext = createContext({
    profile: null,
    setProfile: () => {}
})

export const ProfileContextProvider = ({ children }) => {
    const [profile, setProfile] = useState(null)
    const value = { profile, setProfile}

    return (
        <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
    )
}