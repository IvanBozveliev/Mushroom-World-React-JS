import { useHistory } from 'react-router';
import { useEffect, useState } from 'react';

import * as recipeService from '../../services/recipeServices';
import { isAuth } from '../../HOC/isAuth';
import { getUser } from '../../services/authService';
import Form from '../Forms/RecipeForm';

const EditRecipe = ({
    match
}) => {

    const [recipe, setRecipe] = useState({});
    const [error, setError] = useState('');
 
    const history = useHistory();

    useEffect(() => {
        recipeService.getOne(match.params.recipeId)
            .then(res => setRecipe(res))
    }, [])

    useEffect(() => {
        setTimeout(() => {
            setError('')
        }, 5000)
    }, [error])


    const onEditRecipe = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);

        let title = formData.get('title');
        let serves = formData.get('serves');
        let preparationTime = formData.get('preparationTime');
        let cookingTime = formData.get('cookingTime');
        let ingredients = formData.get('ingredients');
        let directions = formData.get('directions');
        let imageUrl = formData.get('imageUrl');

        recipeService.editOne(match.params.recipeId, {
            title,
            serves,
            preparationTime,
            cookingTime,
            ingredients,
            directions,
            imageUrl,
            author: getUser().username
        })

            .then(res => {

                if (res.ok) {
                    history.push(`/recipes/details/${recipe._id}`)
                } else {
                    setError(res.message);
                    return
                }
            })

    }


    return (
        <div id="contact" className="contact">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="titlepage">
                            <h2>Edit <strong className="llow">Recipe</strong></h2>
                        </div>
                    </div>

                </div>
                {error && <div className="errorRecipe"><p className='errTxtRecipe'>{error}</p></div>}
                <div className="white_color">
                    <div className="row">

                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">

                            <Form onSubmit={onEditRecipe} recipe={recipe}/>
          
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default isAuth(EditRecipe);