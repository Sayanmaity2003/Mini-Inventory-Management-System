import {createContext, useState, useContext} from "react";

const AuthContext = createContext();

export const AuthProvider = ({children}) =>{
    const [user, setUser] = useState(()=>{
        const storedUser = localStorage.getItem("ERP-user");
        return storedUser? JSON.parse(storedUser) : null;
    })

    const login = (userData, token)=>{
        setUser(userData);
        localStorage.setItem("ERP-user", JSON.stringify(userData));
        localStorage.setItem("ERP-token", token);
    }

    const logout = ()=>{
        setUser(userData);
        localStorage.removeItem("ERP-user");
        localStorage.removeItem("ERP-token");
    }
    return (
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth=()=>useContext(AuthContext);
export default AuthProvider;