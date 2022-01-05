import {getUser} from './authService';

const url = 'http://localhost:5000/user';


export const editUserInfo = (userData, userId) => {

      return fetch(`${url}/${userId}`, {
          method: 'PUT',
          headers: {
            
            'Authorization': 'Bearer ' + getUser().token,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(userData)

      })
      .then(res => res.json())
} 

export const getUserInfo = (userId) => {
 
  return fetch(`${url}/${userId}`)
        .then(res => res.json())
        .catch(error => console.log(error))
} 