"use client"


import { UserProvider } from "@/Contexts/UserContext";
import { LittleChatProvider } from "@/Contexts/littleChatContext";
import { TelaLogin } from "@/components/TelaLogin";



const littleChat = () => {

    return (
        <UserProvider>
            <LittleChatProvider>
                <div className="container mx-auto w-screen h-screen overflow-y-hidden">
                    
                    <TelaLogin/>
                    
                </div>
            </LittleChatProvider>
        </UserProvider>
        
    )
}

export default littleChat;


