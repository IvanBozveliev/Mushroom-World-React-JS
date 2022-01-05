import { Modal, Button, Figure } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {useState, useEffect, useContext} from 'react';
import {getUser} from '../../../services/authService';
import * as userServices from '../../../services/userServices';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
// import { AuthContext } from "../../../contexts/AuthContext";

import './Modal.css';

function MyVerticallyCenteredModal(props) {

    // const { user } = useContext(AuthContext);
    const [user, setUser] = useState({})
    const history = useHistory();
    
    useEffect(() => {
        userServices.getUserInfo(getUser()?.id)
         .then(res => {
             setUser(res)
             history.push('/')
         })
    },[])

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <p>Profile</p>
                </Modal.Title>
            </Modal.Header>

            <div className='newModalBody'>

                <Modal.Body>
                    <h4>Photo</h4>
               
                       
                        <Figure>
                        {getUser()?.image ? 
                            <Figure.Image
                            width={171}
                            height={180}
                            alt="171x180"
                            src={getUser()?.image}
                        />
                        :
                        <Figure.Image
                            width={171}
                            height={180}
                            alt="171x180"
                            src="/images/avatar.png"
                        />
                    
                    }
                        
                        <Figure.Caption>
                            <p>Name: {getUser()?.username}</p>
                            <p>Age: {getUser()?.age ? getUser().age : 'none'}</p>
                            <p>Email: {getUser()?.email ? getUser().email : 'none'}</p>
                        </Figure.Caption>
                    </Figure>
                
                </Modal.Body>

            </div>

            <Modal.Footer>
                <div className='editAndDeleteBtnsInfo'>
                    <Link className="btn btn-secondary" to={`/info/${getUser()?.id}`} onClick={props.onHide}>Edit</Link>
                    <Button className="btn btn-primary" onClick={props.onHide}>Close</Button>
                </div>
            </Modal.Footer>
        </Modal>
    );
}

export default MyVerticallyCenteredModal;