import { useContext } from "react"
import { UserCpx } from "../Contexts/UserContext";
import { InputUsers } from "./InputUsers";
import { MsgChatUser1 } from "./MsgChatUser1";
import { MsgChatUser2 } from "./MsgChatUser2";
import { LittleChatCpx } from "@/Contexts/littleChatContext";


export const TelaChat = () => {

    const User = useContext(UserCpx);
    const Msg = useContext(LittleChatCpx);



    return (
        <div className="flex gap-4 mt-8">
           
            <div className="flex-1 flex-col border border-gray-500 rounded-md">
                <h1 className="flex items-center p-3 w-full text-gray-500 border-b border-b-gray-500 bg-gray-950 hover:text-gray-400">
                    {<svg className="h-8 w-8"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                    </svg>
                    }

                    {User?.User2}
                </h1>
                <div className="w-full h-96 overflow-y-scroll overflow-x-hidden text-wrap pl-4 pt-4 pb-4">
                    <MsgChatUser1/>
                </div>
                <div className="border-t border-t-gray-500 bg-transparent">
                    <InputUsers name={`${User?.User1.trim() !== '' && User?.User1}`} />
                </div>
            </div>

            <div className="flex-1 flex-col border border-gray-500 rounded-md">
                <h1 className="flex items-center p-3 w-full border-b border-b-gray-500 bg-gray-950 text-gray-500 hover:text-gray-400">
                    {<svg className="h-8 w-8"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                    </svg>
                    }

                    {User?.User1}
                </h1>
                <div className="w-full h-96 overflow-y-scroll overflow-x-hidden text-wrap pl-4 pt-4 pb-4">
                    <MsgChatUser2/>
                </div>
                <div className="border-t border-t-gray-400 bg-transparent">
                    <InputUsers name={`${User?.User2.trim() !== '' && User?.User2}`} />
                </div>
            </div>

            
        </div>
    )
}