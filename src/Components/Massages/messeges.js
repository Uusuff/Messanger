import React from "react";
import { useEffect, useState } from "react";




export default function Messages () {
   const [Meseeges, setMeseeges] = useState();
   const item = window.localStorage.getItem('messages');
   const ArrItem = JSON.parse(item);
   
   
   
   
   
   
   
   useEffect(()=>{
      function checkMsgData() { 
         if(item) {
            setMeseeges(ArrItem);
         }
      }
      window.addEventListener('storage', checkMsgData);
      setMeseeges(ArrItem)
      return () => {
         window.removeEventListener('storage', checkMsgData);
         setMeseeges(ArrItem)
      }
   },[item])
   
   return (
      <div className="massages">
         {item != null ?
            <div className="massage">
               {ArrItem.map((items) => {
                  return (
                     <span key={items.text} className="span">{items.userId}: {items.text}</span>
                  )
               })}
            </div>
            :
            <div className="massages">
              
            </div>
         }
      </div>
   )
}