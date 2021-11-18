import { Link } from 'react-router-dom';
import "./Recipe.css";

function Recipe({
    title,
    imageUrl
}) {

    return (
        <div>
            <li>
                <Link to="article.html">{title}</Link>
                <div className="card-recipe" >
                    <div className="card-recipe_circle"><img src={imageUrl} /></div>
                </div>
                
            </li>
        </div>
    )

}

export default Recipe;