import { useState } from "react";
import './RecipeForm.css';

const Form = ({
    onSubmit,
    recipe
}) => {

    const [errors, setErrors] = useState({ name: false });
    
    const onHandler = (e) => {
        const product = e.target.value;

        if (product.length < 20) {
            setErrors(state => ({ ...state, name: 'Your text should be at least 20 characters long!' }))
        } else {
            setErrors(state => ({ ...state, name: false }))
        }
    }

    
    return (
        <form className="contact_bg" onSubmit={onSubmit} method="POST">
            <div className="row">
                <div className="col-md-12">

                    <div className="col-md-12">
                        <label htmlFor="title">Title</label>
                        <input id="title" className="contactus" placeholder="Title" type="text" name="title" defaultValue={recipe?.title} />
                    </div>
                    <div className="col-md-12">
                        <label htmlFor="serves">Serves</label>
                        <input id="serves" className="contactus" placeholder="Num of serves" type="number" name="serves" defaultValue={recipe?.serves} />
                    </div>
                    <div className="col-md-12">
                        <label htmlFor="preparation">Preparation Time</label>
                        <input id="preparation" className="contactus" placeholder="Preparation time" type="number" name="preparationTime" defaultValue={recipe?.preparationTime} />
                    </div>
                    <div className="col-md-12">
                        <label htmlFor="cooking">Cooking Time</label>
                        <input id="cooking" className="contactus" placeholder="Cooking time" type="number" name="cookingTime" defaultValue={recipe?.cookingTime} />
                    </div>
                    <div className="col-md-12">
                        <label htmlFor="ingredients">Ingredients</label>
                        <textarea id="ingredients" style={{ borderColor: errors.name ? 'red' : 'inherit' }} className="textarea" placeholder="1 tomato, 8 arugula etc." type="text" defaultValue={recipe?.ingredients} name="ingredients" onBlur={onHandler}></textarea>
                        {errors.name && <span className='errtxt'>{errors.name}</span>}
                    </div>
                    <div className="col-md-12">
                        <label htmlFor="directions">Directions</label>
                        <textarea id="directions" style={{ borderColor: errors.name ? 'red' : 'inherit' }} className="textarea" placeholder="Directions Summary" type="text" defaultValue={recipe?.directions} name="directions" onBlur={onHandler}></textarea>
                        {errors.name && <span className='errtxt'>{errors.name}</span>}
                    </div>
                    <div className="col-md-12">
                        <label htmlFor="image">Image</label>
                        <input id="image" className="contactus" placeholder="Add image URL..." type="text" name="imageUrl" defaultValue={recipe?.imageUrl} />
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <button className="send">Send</button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Form