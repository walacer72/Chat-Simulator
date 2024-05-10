import { useContext, useState } from "react"
import { LittleChatCpx } from "../Contexts/littleChatContext";
import { UserCpx } from "../Contexts/UserContext";
import { EditChat } from "./ModalEditChat";

export const MsgChatUser2 = () => {

    const Msg = useContext(LittleChatCpx);
    const User = useContext(UserCpx);
    const [IdMsg, setIdMsg] = useState(0);
    const [Modal, setModal] = useState(false);
    
    

    const openCloseModal = (id: number) => {
       if (!Modal) {
        setModal(true);
        setIdMsg(id);
       } else {
        setModal(false);
        setIdMsg(id);
       }
       

    }
    

    return (
        
        <>
            {
            
            Msg?.Msg.map(item => 
                <div className="flex flex-col">

                    <div className={`flex gap-2 p-2 bg-gray-600 rounded-md mb-2 
                    
                    ${item.user === User?.User2 ? 'self-start text-left border-r-4 border-r-blue-500':'self-end text-right border-l-4 border-l-lime-500'} 
                    
                    `}>
                        <button onClick={() => openCloseModal(item.id)} className="cursor-pointer">
                        {item.user === User?.User2 && Modal === false &&

                            <svg className="h-5 w-5 text-blue-400"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="7 7 12 12 7 17" />  <polyline points="13 7 18 12 13 17" /></svg>

                        }

                        {item.user === User?.User2 && Modal === true &&

                            <svg className="h-5 w-5"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="11 7 6 12 11 17" />  <polyline points="17 7 12 12 17 17" /></svg>

                        }

                        {item.user !== User?.User2 ?? ''}

                            
                        </button>

                        {Modal && item.id === IdMsg && 
                            <div className="transition-all duration-500 ease-linear">
                                <EditChat id={item.id}/>
                            </div>    
                        }
                        

                        <div className="">
                            <h1 className="font-semibold text-sm text-blue-300 mb-2">{item.user}</h1>
                            <p className="text-base max-w-max w-96">{item.text}</p> 
                            <p className={`text-black text-xs mt-4 ${item.user === User?.User2 ? 'text-right':'text-left'}`}>{`hr ${item.Hours}:${item.Minutes}`}</p>  
                        </div>
                    </div>
                </div>
            )}

            
        </>
            

       
    )
}