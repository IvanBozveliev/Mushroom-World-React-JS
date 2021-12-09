import { useHistory } from 'react-router';
import { useEffect, useState } from 'react';

import * as recipeService from '../../services/recipeServices';
import { isAuth } from '../../HOC/isAuth';

const EditRecipe = ({
    match
}) => {

    const [recipe, setRecipe] = useState({});
    const [error, setError] = useState('');
    const [errors, setErrors] = useState({ name: false });

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


    const onHandler = (e) => {
        const product = e.target.value;

        if (product.length < 20) {
            setErrors(state => ({ ...state, name: 'Your text should be at least 20 characters long!' }))
        } else {
            setErrors(state => ({ ...state, name: false }))
        }
    }

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
            author: sessionStorage.username
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
                            <h2>Add <strong className="llow">Recipe</strong></h2>
                        </div>
                    </div>

                </div>
                {error && <div className="errorRecipe"><p className='errTxtRecipe'>{error}</p></div>}
                <div className="white_color">
                    <div className="row">

                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <form className="contact_bg" onSubmit={onEditRecipe} method="POST">
                                <div className="row">
                                    <div className="col-md-12">

                                        <div className="col-md-12">
                                            <label htmlFor="title">Title</label>
                                            <input id="title" className="contactus" placeholder="Title" type="text" name="title" defaultValue={recipe.title} />
                                        </div>
                                        <div className="col-md-12">
                                            <label htmlFor="serves">Serves</label>
                                            <input id="serves" className="contactus" placeholder="Num of serves" type="number" name="serves" defaultValue={recipe.serves} />
                                        </div>
                                        <div className="col-md-12">
                                            <label htmlFor="preparation">Preparation Time</label>
                                            <input id="preparation" className="contactus" placeholder="Preparation time" type="number" name="preparationTime" defaultValue={recipe.preparationTime} />
                                        </div>
                                        <div className="col-md-12">
                                            <label htmlFor="cooking">Cooking Time</label>
                                            <input id="cooking" className="contactus" placeholder="Cooking time" type="number" name="cookingTime" defaultValue={recipe.cookingTime} />
                                        </div>
                                        <div className="col-md-12">
                                            <label htmlFor="ingredients">Ingredients</label>
                                            <textarea id="ingredients" style={{ borderColor: errors.name ? 'red' : 'inherit' }} className="textarea" placeholder="1 tomato, 8 arugula etc." type="text" defaultValue={recipe.ingredients} name="ingredients" onBlur={onHandler}></textarea>
                                            {errors.name && <span className='errtxt'>{errors.name}</span>}
                                        </div>
                                        <div className="col-md-12">
                                            <label htmlFor="directions">Directions</label>
                                            <textarea id="directions" style={{ borderColor: errors.name ? 'red' : 'inherit' }} className="textarea" placeholder="Directions Summary" type="text" defaultValue={recipe.directions} name="directions" onBlur={onHandler}></textarea>
                                            {errors.name && <span className='errtxt'>{errors.name}</span>}
                                        </div>
                                        <div className="col-md-12">
                                            <label htmlFor="image">Image</label>
                                            <input id="image" className="contactus" placeholder="Add image URL..." type="text" name="imageUrl" defaultValue={recipe.imageUrl} />
                                        </div>
                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                            <button className="send">Create</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default isAuth(EditRecipe);