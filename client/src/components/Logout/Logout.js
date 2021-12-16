// import * as authService from '../../services/authService';
// import { useHistory } from 'react-router-dom';
// import { useEffect } from 'react';

// const Logout = ({
//     onLogout
// }) => {

//     const history = useHistory();
    

//     useEffect(() => {

//         authService.logout()
        
//             .then(() => {
//                 authService.logoutUser();
//                 onLogout();
//                 history.push('/login');
//                 return;
//             })

//     }, [history])

//     return null;
// }


// export default Logout;


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
         
          sessionStorage.removeItem('username');
          sessionStorage.removeItem('token');
          sessionStorage.removeItem('id');

          logout();
          
          history.push('/login')
      })

   },[])
  
   return null;
}


export default Logout;