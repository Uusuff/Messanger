import React, { useEffect, useState } from "react";
import "./App.css"
import Messages from "../Messages/Messages";
import NewMessage from "../NewMessage/NewMessage";
import UserId from "../UserId/UserId";
import { saveUserId } from "../Servises/Ss.servise";

function App() {
   const userId = saveUserId();
   
   return (
      <div className="content">
         <div className="chat">
            <UserId 
               userId={userId}
            />
            <Messages/>
            <NewMessage 
               userId={userId}   
            />    
         </div>
      </div>
   );
}

export default App;
