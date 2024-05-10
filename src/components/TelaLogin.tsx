import { KeyboardEvent, useContext, useState } from "react"
import { TelaChat } from "./TelaChat";
import { UserCpx } from "../Contexts/UserContext";
import { LittleChatCpx } from "../Contexts/littleChatContext";

export const TelaLogin = () => {

    const nameUser = useContext(UserCpx);
    const Msg = useContext(LittleChatCpx)

    const [etapa, setEtapa] = useState<boolean>(false);
    const [nameUsuario1, setNameUsuario1] = useState('');
    const [nameUsuario2, setNameUsuario2] = useState('');

    

    const handleEnterMsg = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.code.toLowerCase() === 'enter' || event.code === 'NumpadEnter') {
            if (nameUsuario1.trim() !== '') {

                nameUser?.setUser1(nameUsuario1.trim())
                
                if (nameUsuario2.trim() !== '') {
                    nameUser?.setUser2(nameUsuario2.trim())
                    setEtapa(true);
                }
            }
            
        }
    }



    return (
        <>
            
            <div className="mt-16 flex flex-col justify-center items-center border border-gray-500 p-4">
                <h1 className="flex text-8xl text-center p-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-gray-950 font-bold">Little Chat<span className="">
                    <svg className="h-8 w-8 text-blue-950" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"/>
                    </svg>

                </span></h1>

                <p className={`${Msg?.Msg && Msg.Msg.length <= 0 ? 'text-transparent': 'text-blue-400 text-2xl'} flex relative`}>

                {Msg?.Msg.length}
                <svg className="h-5 w-5"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                </svg>
        
                    
                </p>
            
                
            </div> 
            {!etapa &&
                <div className="flex h-96 w-full gap-4">
                    <div className="flex-1 flex flex-col justify-center items-center border-4 animate-pulse hover:animate-none focus:animate-none border-gray-500 mt-4 rounded-md">
                        {<svg className="h-16 w-16 text-white p-4 mb-4 rounded-full bg-gray-900"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                        </svg>
                        }

                        <input 
                        type="text" 
                        className="bg-gray-900 outline-none p-4 border border-gray-500 rounded-md" 
                        value={nameUsuario1}
                        placeholder="Nome usuario-1"
                        onChange={(e) => setNameUsuario1(e.target.value)}
                        onKeyUp={handleEnterMsg}
                        /> 
                    </div>

                    <div className="flex-1 flex flex-col justify-center items-center border-4 animate-pulse hover:animate-none focus:animate-none border-gray-500 mt-4 rounded-md">
                        {<svg className="h-16 w-16 text-white p-4 mb-4 rounded-full bg-gray-900"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                        </svg>
                        }

                        <input 
                        type="text" 
                        className="bg-gray-900 outline-none p-4 border border-gray-500 rounded-md" 
                        value={nameUsuario2}
                        placeholder="Nome usuario-2"
                        onChange={(e) => setNameUsuario2(e.target.value)}
                        onKeyUp={handleEnterMsg}
                        />  

                    </div>
                </div>
            }
            
            
           

            {etapa &&
                <TelaChat/>
            }
        </>
    )
}