import { Modal, Button, Figure } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Modal.css';

function MyVerticallyCenteredModal(props) {

    const onEditInfo = (e) => {
          console.log(e.currentTarget)
    }

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
                <p>
                    <Figure>
                        <Figure.Image
                            width={171}
                            height={180}
                            alt="171x180"
                            src="https://cdn.w600.comps.canstockphoto.com/cartoon-zombie-head-vector-clip-art_csp62611919.jpg"
                        />
                        <Figure.Caption>
                            <p>Name: Petko</p>
                            <p>Age: 23</p>
                            <p>Email: ivankooo1@abv.bg</p>
                        </Figure.Caption>
                    </Figure>
                </p>
            </Modal.Body>

            </div>
            
            <Modal.Footer>
                <div className='editAndDeleteBtnsInfo'>
                    <Link className="btn btn-secondary" to={'/info'} onClick={onEditInfo}>Edit</Link>
                    <Button className="btn btn-primary" onClick={props.onHide}>Close</Button>
                </div>
            </Modal.Footer>
        </Modal>
    );
}

export default MyVerticallyCenteredModal;