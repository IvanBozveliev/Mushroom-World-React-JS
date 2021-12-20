import './AllMush.css';
import Mush from './Mush';
import NavMush from './NavMush';

import { useState, useEffect } from 'react';
import * as mushServices from '../../services/mushServices';
import {isAuth} from '../../HOC/isAuth';

const AllMush = ({
    match
}) => {

    const currentType = match.params.mushType;
    const [products, setProducts] = useState([]);

    useEffect(() => {
       
       mushServices.getAll(currentType)
        .then(res => setProducts(res))

    },[currentType])
    
    return (
        <section>
            <div className="titlepage">
                <h2>All <strong className="llow">Mushrooms</strong></h2>
            </div>
            <div className="btns">
                <NavMush /> 
            </div>
            <div className="wrapper">
                <div className="spacer-mush">
                    <ul>
                       {products?.length !== 0 ? products.map(x => <Mush key={x._id} {...x} />) : <h1>Still haven`t mushrooms...</h1>}
                    </ul>
                </div>
                <div className="right-element">
                    <div className="images_box">
                        <figure><img src="/images/mushroom5.jpg" /></figure>
                    </div>
                </div>
            </div>


        </section>

    )
    
}

export default isAuth(AllMush);