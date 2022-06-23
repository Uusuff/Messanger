const userIdSsKey = 'userId';

export function saveUserId() {
   const userId = window.sessionStorage.getItem(userIdSsKey)
  if(!userId){
      window.sessionStorage.setItem(userIdSsKey, (Math.random() + 1).toString(36).substring(7));
      return window.sessionStorage.getItem(userIdSsKey)
   };
   return userId;
};