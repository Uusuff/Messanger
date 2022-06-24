const userIdSsKey = 'userId';

export function saveUserId(id) {
   window.sessionStorage.setItem(userIdSsKey, id); 
};

export function getUserId() {
   const userId = window.sessionStorage.getItem(userIdSsKey);
   return userId;
};