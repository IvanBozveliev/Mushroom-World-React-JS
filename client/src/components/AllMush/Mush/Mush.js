import {Link} from 'react-router-dom';

const Mush = ({
    productname,
    imageUrl,
    mushType
}) => {
    return (
        <li>
            <Link to="article.html">{productname} </Link>
            <div className="card">

                {/* <h3 className='poison'>Poison<img src='/images/skull2.png' /></h3>  */}
                <h3 className={mushType}>{mushType}<img src={`/images/${mushType}.png`} /></h3>
                {/* <div className="cta-container"><Link to="#" className="det-link">Details</Link></div> */}
                <div className="card_circle"><img src={imageUrl} /></div>

            </div>
        </li>
    )
}

export default Mush;