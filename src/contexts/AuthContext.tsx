import { createContext, useState } from "react";
import { api } from "../services/api";
import { onSignIn } from "../services/auth";

type Auth = {
    user: any;
    signIn: (data: any) => Promise<void | boolean>;
    signOut: () => void;
}

export const AuthContext = createContext({} as Auth)

export function AuthProvider({ children }: any) {
    const [user, setUser] = useState<any>(null);

    const signOut = () => {
    }
    const signIn = async (data: any) => {
        const res = await api.post('auth/login', {
            email: data.email,
            password: data.password,
        }).then((res: any) => {
            return res.data
        });
        if (res.success) {
            onSignIn(res.user, res.token);
            return true;
        } else {
            return false;
        }
    }
    return (
        <AuthContext.Provider value={{
            user,
            signIn,
            signOut
        }}>
            {children}
        </AuthContext.Provider>
    )
}