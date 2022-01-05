import { createContext } from "react";

import useSessionStorage from "../hooks/useSessionStorage";

const initialAuthState = {
    _id: '',
    username: '',
    token: ''
}

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [user, setUser] = useSessionStorage('user', initialAuthState);

    const login = (authData) => {
        setUser(authData)
    }

    const logout = () => {
        setUser(initialAuthState)
    }

    return (
        <AuthContext.Provider value={{user, login, logout}} >
            {children}
        </AuthContext.Provider>
    )
}

// export const useAuthContext = () => {
//     const authState = useContext(AuthContext)
//     return authState;
// }