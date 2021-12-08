import './AddRecipe.css';

import * as recipeServices from '../../services/recipeServices';
import { useState, useEffect } from 'react';
import { isAuth } from '../../HOC/isAuth';

const AddRecipe = ({
    history
}) => {
   const [error, setError] = useState('');
   
   useEffect(() => {
      setTimeout(() => {
          setError('')
      }, 5000)
   }, [error])

   const onRecipeCreate = (e) =>{
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
           author: sessionStorage.username,
           likes
      
       })
        .then(res =>{
            if(res.ok){
                history.push('/all-recipes')
            }else{
                setError(res.message)
                return 
            }
             
        })

   }
   return(
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
                    <form className="contact_bg" onSubmit={onRecipeCreate} method="POST">
                        <div className="row">
                            <div className="col-md-12">

                                <div className="col-md-12">
                                    <label htmlFor="title">Title</label>
                                    <input id="title" className="contactus" placeholder="Title" type="text" name="title" />
                                </div>
                                <div className="col-md-12">
                                    <label htmlFor="serves">Serves</label>                                    
                                    <input id="serves" className="contactus" placeholder="Num of serves" type="number" name="serves" />
                                </div>
                                <div className="col-md-12">
                                    <label htmlFor="preparation">Preparation Time</label>
                                    <input id="preparation" className="contactus" placeholder="Preparation time" type="number" name="preparationTime" />
                                </div>
                                <div className="col-md-12">
                                    <label htmlFor="cooking">Cooking Time</label>
                                    <input id="cooking" className="contactus" placeholder="Cooking time" type="number" name="cookingTime" />
                                </div>
                                <div className="col-md-12">
                                    <label htmlFor="ingredients">Ingredients</label>
                                    <textarea id="ingredients" className="textarea" placeholder="1 tomato, 8 arugula etc." type="text" name="ingredients"></textarea>
                                </div>
                                <div className="col-md-12">
                                    <label htmlFor="directions">Directions</label>
                                    <textarea id="directions" className="textarea" placeholder="Directions Summary" type="text" name="directions"></textarea>
                                </div>
                                <div className="col-md-12">
                                    <label htmlFor="image">Image</label>
                                    <input id="image" className="contactus" placeholder="Add image URL..." type="text" name="imageUrl" />
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

export default isAuth(AddRecipe);