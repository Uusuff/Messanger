import React, {useState} from "react";
import { pushMsg } from "../Servises/ls.servise";

export default function NewMessage (props) {
   const [msg, setMsg] = useState("");
   
   const handelSentMsg = () => {
      if(!msg) return;
      pushMsg(props.userId, msg);
      setMsg ("");
      const event = new Event('storage');
      window.dispatchEvent(event);
   }

   return (
      <div className="AddMessage">   
         <input
            type="text"
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
         />
         <button onClick={handelSentMsg}>
            Sent
         </button>
      </div>   
   )
}