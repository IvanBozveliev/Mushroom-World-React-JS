import { Link } from 'react-router-dom';
import "./Mush.css";
const Mush = ({
    productname,
    imageUrlOne,
    mushType,
    _id
}) => {
    return (
        <>
            <li>
                <Link to={`/mush/details/${_id}`}>{productname}</Link>

                <div className="card">

                    {/* <h3 className='poison'>Poison<img src='/images/skull2.png' /></h3>  */}
                    <h3 className={mushType}>{mushType}<img src={`./images/${mushType}.png`} /></h3>
                    {/* <div className="cta-container"><Link to="#" className="det-link">Details</Link></div> */}
                    <div className="card_circle"><img src={imageUrlOne} /></div>

                </div>
                
            </li>

        </>
    )
}

export default Mush;