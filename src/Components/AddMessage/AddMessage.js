import React from "react";
import { useEffect, useState } from "react";
import App from "../../App";



export default function AddMessage (props) {
   
   
   return (
      <div className="AddMessage">   
         <input
            type="text"
            value={props.msg}
            onChange={props.handleChangeInput}
         />
         <button onClick={props.handelSentMsg}>
            Sent
         </button>
      </div>   
   )
}