import * as authService from '../../services/authService';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';

const Logout = ({
    onLogout
}) => {

    const history = useHistory();

    useEffect(() => {

        authService.logout()
        
            .then(() => {
                console.log('work')
                authService.logoutUser();
                onLogout();
                history.push('/login');
                return;
            })

    }, [history])

    return null;
}


export default Logout;