import { Link } from 'react-router-dom';
import "./Recipe.css";
const Recipe = ({
    title,
    imageUrl,
    mushType
}) => {
    return (
        <>
            <li>
                <Link to="article.html">{title} </Link>
            </li>
            <div className="card-recipe">

                {/* <h3 className='poison'>Poison<img src='/images/skull2.png' /></h3>  */}
                {/* <div className="cta-container"><Link to="#" className="det-link">Details</Link></div> */}
                <div className="card-recipe_circle"><img src={imageUrl} /></div>

            </div>
        </>
    )
}

export default Recipe;