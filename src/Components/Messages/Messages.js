import React, { useEffect, useState } from "react";
import { getMsgList } from "../Servises/ls.servise";


export default function Messages () {
   const msgList = getMsgList();
   const [messages, setMessages] = useState(msgList);
   
   function updateMsgList () { 
      setMessages(getMsgList());
   }
   
   useEffect(()=>{
      window.addEventListener('storage', updateMsgList);
     
      return () => {
         window.removeEventListener('storage', updateMsgList);
      }
   },[])
   
   return (
      <div className="massages">
         {msgList != null ?
            <div className="massage">
               {messages.map((items) => {
                  return (
                     <span key={items.text} className="span">
                        {items.userId}: {items.text}
                     </span>
                  )
               })}
            </div>
            :
            <div className="massages"></div>
         }
      </div>
   )
}