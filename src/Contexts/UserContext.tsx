import { ReactNode, createContext, useState } from "react";

type UserCpx = {
    User1: string;
    setUser1: (newUser: string) => void;
    User2: string;
    setUser2: (newUser: string) => void;
}

export const UserCpx = createContext<UserCpx | null>(null);

export const UserProvider = ({children}: {children: ReactNode}) => {

    const [User1, setUser1] = useState('');
    const [User2, setUser2] = useState('');
    
    
    return (
        <UserCpx.Provider value={{User1, setUser1, User2, setUser2}}>
            {children}
        </UserCpx.Provider>
    )
}
