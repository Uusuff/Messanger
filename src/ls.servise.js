const MsgsLsKey = 'messages';

export function pushMsg(userId, text) {
   const msgs = window.localStorage.getItem(MsgsLsKey);
   const Pmsgs = JSON.parse(msgs);
  
   const msgData = {
      userId: userId,
      text: text
   };

      if(!msgs) {
         const strLsData = JSON.stringify([msgData]);
         window.localStorage.setItem(MsgsLsKey, strLsData);
      } else {
         Pmsgs.push(msgData);
         const NewMsg = JSON.stringify(Pmsgs);
         window.localStorage.setItem(MsgsLsKey, NewMsg);
      }

}