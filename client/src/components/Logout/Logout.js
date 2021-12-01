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
import {useHistory} from 'react-router-dom';
import { useEffect } from 'react';

const Logout = ({
   onLogout
}) => {

   const history = useHistory();

   useEffect(() => {
     
     authService.logout()
      .then(() => {
          sessionStorage.removeItem('username');
          sessionStorage.removeItem('token');
          onLogout();
          
          history.push('/login')
      })

   },[history])
  
   return null;
}


export default Logout;