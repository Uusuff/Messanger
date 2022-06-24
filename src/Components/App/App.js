import React, { useMemo } from "react";
import "./App.css"
import Messages from "../Messages/Messages";
import NewMessage from "../NewMessage/NewMessage";
import UserId from "../UserId/UserId";
import { getUserId, saveUserId } from "../../Servises/Ss.servise";

function App() {
   const userId = useMemo(() => {
      const randomId = (Math.random() + 1).toString(36).substring(7);
      const id = getUserId() ?? randomId;

      if (!id) saveUserId(id);

      return id;
    }, []);

   return (
      <div className="content">
         <div className="chat">
            <UserId userId={userId}/>
            <Messages/>
            <NewMessage userId={userId}/>    
         </div>
      </div>
   );
}

export default App;
