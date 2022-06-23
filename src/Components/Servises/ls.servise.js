const msgsLsKey = 'messages';

export function pushMsg(userId, text) {
   const msgs = window.localStorage.getItem(msgsLsKey);
   const pMsgs = JSON.parse(msgs);
  
   const msgData = {
      userId: userId,
      text: text
   };

      if(!msgs) {
         const strLsData = JSON.stringify([msgData]);
         window.localStorage.setItem(msgsLsKey, strLsData);
      } else {
         pMsgs.push(msgData);
         const NewMsg = JSON.stringify(pMsgs);
         window.localStorage.setItem(msgsLsKey, NewMsg);
      }

}
export function getMsgList() {
   const item = window.localStorage.getItem(msgsLsKey);
   const msgList = JSON.parse(item);
   return msgList;
}