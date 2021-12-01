import './DetailsMush.css';
import { useEffect, useState } from 'react';
import * as mushServices from '../../services/mushServices';
import NavDetailsMush from './NavDetailsMush';

const DetailsMush = ({
    match
}) => {
    const [mush, setMush] = useState({});

    useEffect(() => {
        mushServices.getOne(match.params.mushId)
            .then(res => setMush(res))
    }, []);

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
                            <h3>{mush.productname}</h3>
                            <h4 className={mush.mushType == "edable" ? "edable" : "poison"}>{mush.mushType}</h4>
                           
                            <div className="btnsMush">
                                    <NavDetailsMush />
                                </div>
                            
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