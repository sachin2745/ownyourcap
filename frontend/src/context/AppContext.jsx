import { useRouter } from 'next/navigation';
import React, { createContext, useState, useContext } from 'react'

const AppContext = createContext();

export const AppProvider = ({ children }) => {

    const router = useRouter();

    const [currentUser, setCurrentUser] = useState(
        JSON.parse(sessionStorage.getItem('user'))
    );

    const [loggedIn, setLoggedIn] = useState(currentUser !== null)

    const logout = () => {
        setLoggedIn(false);
        sessionStorage.removeItem('user');
        setCurrentUser(null);
        router.push('/login');
    }

    return (
        <AppContext.Provider value={{ currentUser, setCurrentUser, loggedIn, setLoggedIn, logout }}>
            {children}
        </AppContext.Provider>
    )
}

const useAppContext = () => useContext(AppContext);
export default useAppContext;