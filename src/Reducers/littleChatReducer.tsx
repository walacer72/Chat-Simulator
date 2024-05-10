import { Usuario } from "../types/Chat";


type Add = {
    type: 'Add';
    payload: {
        user: string;
        text: string;
        Hours: number;
        Minutes: number;
    }
}

type Remove = {
    type: 'Remove';
    payload: {
        id: number; 
    }
}

type Edit = {
    type: 'Edit';
    payload: {
        id: number;
        newText: string;
    }
}





export type ChatAction = Add | Remove | Edit ;    

export const littleChatReducer = (Chat: Usuario[], action: ChatAction) => {

    switch(action.type) {
        case "Add":
            return [...Chat, {
                id: Chat.length,
                user: action.payload.user,
                text: action.payload.text,
                Hours: action.payload.Hours,
                Minutes: action.payload.Minutes
            }]
        case "Remove":
            return Chat.filter(item => item.id !== action.payload.id)
            

        case "Edit":
            return Chat.map(item => {
                if (item.id === action.payload.id) {
                    item.text = action.payload.newText;
                }
                return item;
            })  
        
        default: 
            return Chat;    
    }
}