import React, { useState, useEffect } from "react";
import "./App.css"
import { pushMsg } from "./ls.servise";
import Messages from "./Components/Massages/messeges";
import AddMessage from "./Components/AddMessage/AddMessage";



function App() {
   const [userId, setUserId] = useState((Math.random() + 1).toString(36).substring(7));
   const [msg, setMsg] = useState("");
  
   
   

   const handleChangeInput = (event) => {
      const value = event.target.value;
      setMsg(value);
   };

   const handelSentMsg = () => {
      if(!msg) return;
      pushMsg(userId, msg);
      setMsg ("");
   }
   
   

   

  

  return (
   <div className="content">
      <div className="chat">
         <div className="userId">
            User Id: {userId}
         </div>

         <Messages />
         <AddMessage 
            msg={msg} 
            handleChangeInput={handleChangeInput} 
            handelSentMsg={handelSentMsg}
         />
           
      </div>
   </div>
  );
}

export default App;
