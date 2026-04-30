import { useState } from "react";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({children}) => { // uso del prop children para acceder a los componentes hijos que se encuentran dentro de la función
    const [user, setUser] = useState(()=>{
        const token = localStorage.getItem('token')

        if(token){
            try {
                return JSON.parse(atob(token.split('.')[1]));
            } catch (error) {
                console.log(error);
                return null
            }
        }

        return null;
    });

    const login = (token) => {
        localStorage.setItem('token' , token)
        try{
            const payload = JSON.parse(atob(token.split('.')[1]))
            setUser(payload)    
        } catch (error) {
            setUser(null)
        }
    }

    const logout = () => {
        localStorage.removeItem('token')
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{user , login , logout}}>
            {children}
        </AuthContext.Provider>
    )
}