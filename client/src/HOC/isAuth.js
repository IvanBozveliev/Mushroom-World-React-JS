import { useContext } from "react";
import { useHistory } from "react-router";
import { AuthContext } from "../contexts/AuthContext";


// Higher-Order Component

export const isAuth = (Component) => {

    const WrapperComponent = (props) => {
        const history = useHistory()
        const {user} = useContext(AuthContext);

        if(user.username){
            return <Component {...props} />
        }else{
            history.push('/login');
            return null
        }
    }
    return WrapperComponent;
} 
