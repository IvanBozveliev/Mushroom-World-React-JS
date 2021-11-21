import './DetailsRecipes.css';
import { useEffect, useState } from 'react';
import * as recipeServices from '../../services/recipeServices';

const DetailsRecipes = ({
    match
}) => {

    const [recipe, setRecipe] = useState({});

    useEffect(() => {
        recipeServices.getOne(match.params.recipeId)
            .then(res => setRecipe(res))
    })

    return (
        <section id="deatils-page">
            <div className="titlepage">
                <h2>Best <strong className="llow">Recipes</strong></h2>
            </div>
                <div className="wrapper-recipe">
                    <div className="product-img">
                        <img src={recipe.imageUrl} />
                    </div>
                    <div className="product-info">
                        <div className="product-text">
                            <div className="product-text">
                                <h1>{recipe.title}</h1>
                                <h4><b>Serves:</b> 5</h4>
                                <h4><b>Preparation time:</b> {recipe.preparationTime} min</h4>
                                <h4><b>Cooking time:</b> {recipe.cookingTime} min</h4>
                                <h4><b>Ingredients:</b><br/>&emsp;{recipe.ingredients}</h4>
                                <h4><b>Likes:</b> {recipe.likes ? recipe.likes.length : 0}</h4>
                                <p>Directions: {recipe.directions}</p>

                                {/* <!-- if there are already tenants of the housing, separate their names with a comma and a space ", "  --> */}
                                <p>Author: {recipe.creator}</p>
                            </div>
                        </div>

                    </div>
                </div>
        </section>
    )

}

export default DetailsRecipes;