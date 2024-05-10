
import { ReactNode, createContext, useReducer } from "react";
import { littleChatReducer } from "../Reducers/littleChatReducer";
import { Usuario } from "../types/Chat";




type LittleChatCpx = {
    
    
    Msg: Usuario[];
    AddMsgUsuario: (user: string, text: string, Hours: number, Minutes: number) => void;
    EditMsg: (id: number) => void;
    DeletMsg: (id: number) => void;
    
}

export const LittleChatCpx = createContext<LittleChatCpx | null>(null);

export const LittleChatProvider = ({children}: {children: ReactNode}) => {

    
    const [Msg, dispatch] = useReducer(littleChatReducer, [])
    

    const AddMsgUsuario = (user: string, text: string, Hours: number, Minutes: number) => {
       
        dispatch({ type: "Add", payload: {user, text, Hours, Minutes}});
        
        
    }

    const EditMsg = (id: number) => {   
        const item = Msg.find(i => i.id === id);
        if (!item) return false;

        const newText = window.prompt('EDITAR TAREFA', item.text)
        if (!newText) return false;
            
        dispatch({type: "Edit", payload: {id, newText}})
      
    }

    const DeletMsg = (id: number) => {
        dispatch({type: "Remove", payload: {id}})
    }

    
    

    return (
        <LittleChatCpx.Provider value={{Msg, AddMsgUsuario, EditMsg, DeletMsg}}>
            {children}
        </LittleChatCpx.Provider>
    )
}