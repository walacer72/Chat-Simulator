import { useContext } from "react"
import { LittleChatCpx } from "../Contexts/littleChatContext"


type Props = {
    id: number
}

export const EditChat = ({id}: Props) => {

    const Msg = useContext(LittleChatCpx);
    

    const handleEditText = (id: number) => {
        Msg?.EditMsg(id);
        
    }

    const handleDeletMsg = (id: number) => {
        Msg?.DeletMsg(id);  
        
    }


    return (    
        
        <div className="bg-gray-950 text-white text-sm p-2 rounded-md self-start shadow-lg h-full flex flex-col justify-center">
            <div className="h-auto">
                <div 
                onClick={() => handleEditText(id)}
                className="self-start cursor-pointer hover:opacity-70">
                    Editar msg
                </div>

                <div
                onClick={() => handleDeletMsg(id)}
                className="self-start cursor-pointer hover:opacity-70">Apagar Msg</div>
            </div>
        </div>

       
    )
}