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
                                <h1>Dish: {recipe.title}</h1>
                                <h4><b>Time:</b> 20 min</h4>
                                <h4><b>Year:</b> 2021</h4>
                                <h4><b>INGREDIENTS:</b> 2021</h4>
                                <h4><b>Likes:</b> {recipe.likes ? recipe.likes.length : 0}</h4>
                                <p>Description: {recipe.description}</p>

                                {/* <!-- if there are already tenants of the housing, separate their names with a comma and a space ", "  --> */}
                                <p>People rented this housing: Alex Petkov, Ivan Dobrev</p>

                                {/* <!-- If not display: --> */}
                                <p>People rented this housing: There are no tenants yet.</p>
                            </div>
                        </div>

                    </div>
                </div>
        </section>
    )

}

export default DetailsRecipes;