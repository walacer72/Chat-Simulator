import { KeyboardEvent, useContext, useState } from "react";
import { LittleChatCpx } from "../Contexts/littleChatContext";
import { UserCpx } from "../Contexts/UserContext";

type Props = {
    name: string;
}


export const InputUsers = ({name}: Props) => {

    const Msg = useContext(LittleChatCpx);
    const currentTime = new Date();
    const Hours = currentTime.getHours();
    const Minutes = currentTime.getMinutes();

    const [Text, setText] = useState('');

    const handleEnterMsg = (event: KeyboardEvent<HTMLInputElement>) => {

        

        if (event.code.toLowerCase() === 'enter' || event.code === 'NumpadEnter') {

            if (Text) {
                Msg?.AddMsgUsuario(name, Text, Hours, Minutes);
                setText('');
            } 
            
        }
    }

    return (
        <input 
        type="text"
        className="w-full bg-transparent p-4 text-center outline-none"
        placeholder={`${name}, Digite sua msg`}
        value={Text}
        onChange={e => setText(e.target.value)}
        onKeyUp={handleEnterMsg}
         />
    )
}