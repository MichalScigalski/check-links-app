import { createContext, useState } from 'react'

export const AlertContext = createContext({
    alertData: null,
    setAlertData: () => {},
})

export const AlertContextProvider = ({ children }) => {
    const [alertData, setAlertData] = useState(null)
    const value = { alertData, setAlertData }

    return (
        <AlertContext.Provider value={value}>{children}</AlertContext.Provider>
    )
}
