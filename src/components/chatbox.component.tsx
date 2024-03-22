import { useEffect, useState } from "react";
import { sendMessage } from "../services/chatService";
import { OpenAI } from 'openai';

const openai = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true // You should not set this to true in a production environment
});


function ChatBox() {
    // const [messages, setMessages] = useState([]);
    // const [input, setInput] = useState('');
    useEffect(() => {
       
    },[]);
  

    return (
        <><button onClick={() => sendMessage(openai)}>Send Message</button></>
    )
    
}

export default ChatBox