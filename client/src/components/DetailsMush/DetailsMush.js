import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import { getUser } from '../../services/authService';
import {Modal, Button} from 'react-bootstrap';


import './DetailsMush.css';
import * as mushServices from '../../services/mushServices';

const DetailsMush = ({
    match
}) => {

    const [mush, setMush] = useState({});
    const history = useHistory();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () =>  setShow(true);    

    useEffect(() => {
        mushServices.getOne(match.params.mushId)
            .then(res => setMush(res))
    }, []);

    const deleteMush = () => {
            setShow(false);
            mushServices.deleteOne(mush._id)
                .then(() => history.push('/all-mushrooms'))
    }

    const ownerButtons = (
        <div className="btnsMush">
            <Link className="sortBtnEditMush" to={`/mush/details/edit/${mush._id}`}>Edit</Link>
            <button className='sortBtnDeleteMush'  onClick={handleShow}>Delete</button>
        </div>
    )

    return (
        <div id="vegetable" className="vegetable">
            <div className="container-footer">
                <div className="row">
                    <div className="col-md-12">
                        <div className="titlepage">
                            <h2> Encyclopedia of  <strong className="llow">mushrooms</strong> </h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12 ">
                        <div className="vegetable_shop">
                            <h3>{mush.title}</h3>
                            <div className='typeAndImgDetails'>
                               <h4 className={mush.mushType}>{mush.mushType}</h4>
                               <img className='detailsImg' src={`/images/${mush.mushType}.png`}/>
                            </div>
                           

                            {getUser()?.id && (mush.creator == getUser()?.id ? ownerButtons : "")}

                            <div className='distribution'>
                                <p><b> Distribution: </b>{mush.description}</p>
                                <p><b> Identification guide: </b>{mush.identification}</p>
                                <p><b> Culinary notes: </b>{mush.culinary}</p>
                                <p className='authorMush'><b>Author: </b>{mush.author}</p>

                            </div>


                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12 ">
                        <div className="vegetable_img">
                            <figure><img src={mush.imageUrlOne} alt="#" /></figure>

                        </div>
                    </div>
                    <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 ">
                        <div className="vegetable_img margin_top">
                            <figure><img src={mush.imageUrlTwo} alt="#" /></figure>

                        </div>
                    </div>
                </div>
            </div>

            <Modal show={show} onHide={handleClose}>
           
                <Modal.Body>Do you want to delete this article?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={deleteMush}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )

}

export default DetailsMush;