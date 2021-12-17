import './DetailsRecipes.css';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import * as recipeServices from '../../services/recipeServices';


const DetailsRecipes = ({
    match
}) => {

    const [recipe, setRecipe] = useState({});
   
    const history = useHistory();

    useEffect(() => {
        recipeServices.getOne(match.params.recipeId)
            .then(res => setRecipe(res))
    }, [])

    const deleteRecipe = (e) => {
        e.preventDefault();
        if (window.confirm('Do you want to delete this article?')) {
            recipeServices.deleteOne(recipe._id)
                .then(() => history.push('/all-recipes'))
        } else {
            return
        }

    }

    const isLiked = (e) => {
        e.preventDefault();

        recipeServices.likeOne(match.params.recipeId)
            .then(res => {
                setRecipe(res)
                history.push(`/recipes/details/${recipe._id}`)
            })

    }

    const ownerButtons = (
        <div className="btnsRecipe">
            <Link className="sortBtnEditRecipe" to={`/recipes/details/edit/${recipe._id}`}>Edit</Link>
            <Link className='sortBtnDeleteRecipe' onClick={deleteRecipe}>Delete</Link>
        </div>
    )

    const userButtons = (
        <> 
        

         {recipe.likes?.includes(sessionStorage.id) ?
          (<h5 className='likedText'>You liked this recipe!</h5>)
          :
          (<button className="likes" onClick={isLiked}>Like</button>)
         }


        </>
    )
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
                            <div className='title'>
                                <h1>{recipe.title}</h1>
                                <h4><b className='author'>Author: {recipe.author}</b></h4>
                            </div>
                            <h4><b>Serves:</b> 5</h4>
                            <h4><b>Preparation time:</b> {recipe.preparationTime} min</h4>
                            <h4><b>Cooking time:</b> {recipe.cookingTime} min</h4>
                            <h4><b>Ingredients:</b><br /><br />{recipe.ingredients}</h4>
                            <h4><b>Likes:</b> {recipe.likes ? recipe.likes.length : 0}</h4>


                            {sessionStorage.id && (recipe.creator == sessionStorage.id ? ownerButtons : userButtons)}

                            <div className="contentText">
                                <p>Directions: {recipe.directions}</p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    )

}

export default DetailsRecipes;