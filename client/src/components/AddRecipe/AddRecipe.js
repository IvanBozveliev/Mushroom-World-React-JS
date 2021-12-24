import './AddRecipe.css';

import * as recipeServices from '../../services/recipeServices';
import { useState, useEffect } from 'react';
import { isAuth } from '../../HOC/isAuth';
import { getUser } from '../../services/authService';

import Form from '../Forms/RecipeForm';

const AddRecipe = ({
    history
}) => {

    const [error, setError] = useState('');
    
    useEffect(() => {
        setTimeout(() => {
            setError('')
        }, 5000)
    }, [error])


    const onRecipeCreate = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);

        let title = formData.get('title');
        let serves = formData.get('serves');
        let directions = formData.get('directions');
        let preparationTime = formData.get('preparationTime');
        let cookingTime = formData.get('cookingTime');
        let ingredients = formData.get('ingredients');
        let imageUrl = formData.get('imageUrl');
        let likes = formData.get('likes');

        recipeServices.create({
            title,
            serves,
            directions,
            preparationTime,
            cookingTime,
            ingredients,
            imageUrl,
            author: getUser().username,
            likes

        })
            .then(res => {
                if (res.ok) {
                    history.push('/all-recipes')
                } else {
                    setError(res.message)
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
                            
                            <Form onSubmit={onRecipeCreate}/>
                           
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default isAuth(AddRecipe);