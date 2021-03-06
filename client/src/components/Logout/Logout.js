import * as authService from '../../services/authService';
import { AuthContext } from '../../contexts/AuthContext';

import {useHistory} from 'react-router-dom';
import { useEffect, useContext } from 'react';

const Logout = () => {

   const history = useHistory();
   const {logout} = useContext(AuthContext);

   useEffect(() => {
     
     authService.logout()
      .then(() => {
         
          sessionStorage.removeItem('user');

          logout();
          
          history.push('/login')
      })

   },[history, logout])
  
   return null;
}


export default Logout;