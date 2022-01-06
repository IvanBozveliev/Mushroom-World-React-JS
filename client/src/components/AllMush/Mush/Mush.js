import { Link } from 'react-router-dom';
import "./Mush.css";
const Mush = ({
    title,
    imageUrlOne,
    mushType,
    _id
}) => {
    return (
        <>
            <li>
                <Link to={`/mush/details/${_id}`}>{title}</Link>

                <div className="card">

                    <h3 className={mushType}>{mushType}<img src={`/images/${mushType}.png`} /></h3>
                    <div className="card_circle"><img src={imageUrlOne} /></div>

                </div>
                
            </li>

        </>
    )
}

export default Mush;