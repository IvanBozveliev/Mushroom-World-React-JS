import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import { useHistory } from 'react-router';

import './DetailsMush.css';
import * as mushServices from '../../services/mushServices';

const DetailsMush = ({
    match
}) => {
    const [mush, setMush] = useState({});
    const history = useHistory();

    useEffect(() => {
        mushServices.getOne(match.params.mushId)
            .then(res => setMush(res))
    }, []);
    
    const deleteMush = (e) => {
         e.preventDefault()

         mushServices.deleteOne(mush._id)
         .then(() => history.push('/all-mushrooms'))
    }
    const ownerButtons = (
        <div className="btnsMush">
            <Link className="sortBtnEditMush" to={`/mush/details/edit/${mush._id}`}>Edit</Link>
            <button className='sortBtnDeleteMush' onClick={deleteMush}>Delete</button>
        </div>
    )

    return (
        <div id="vegetable" className="vegetable">
            <div className="container-footer">
                <div className="row">
                    <div className="col-md-12">
                        <div className="titlepage">
                            <h2> Best Mushroom <strong className="llow">Encyclopedia</strong> </h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12 ">
                        <div className="vegetable_shop">
                            <h3>{mush.title}</h3>
                            <h4 className={mush.mushType == "edable" ? "edable" : "poison"}>{mush.mushType}</h4>

                            {sessionStorage.id && (mush.creator == sessionStorage.id ? ownerButtons : "")}

                            <p><b> Distribution: </b>{mush.description}</p>
                            <p>Author: {mush.author}</p>

                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12 ">
                        <div className="vegetable_img">
                            <figure><img src={mush.imageUrlOne} alt="#" /></figure>
                            <span>01</span>
                        </div>
                    </div>
                    <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 ">
                        <div className="vegetable_img margin_top">
                            <figure><img src={mush.imageUrlTwo} alt="#" /></figure>
                            <span>02</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default DetailsMush;