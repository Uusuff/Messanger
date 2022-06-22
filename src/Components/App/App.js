import React, { useState } from "react";
import "./App.css"
import Messages from "../Messages/Messages";
import NewMessage from "../NewMessage/NewMessage";
import UserId from "../UserId/UserId";

function App() {
   const [userId, setUserId] = useState((Math.random() + 1).toString(36).substring(7));
   
   
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
