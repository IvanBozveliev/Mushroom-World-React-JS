import './DetailsRecipes.css';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import * as recipeServices from '../../services/recipeServices';
import { getUser } from '../../services/authService';
import InputEmoji from 'react-input-emoji';
import { Modal, Button } from 'react-bootstrap';

const DetailsRecipes = ({
    match
}) => {

    const [text, setText] = useState('');
    const [recipe, setRecipe] = useState({});

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const history = useHistory();

    useEffect(() => {
        recipeServices.getOne(match.params.recipeId)
            .then(res => setRecipe(res))
    }, [])


    const deleteRecipe = () => {

        recipeServices.deleteOne(recipe._id)
            .then(() => history.push('/all-recipes'))


    }

    const handleOnEnter = (text) => {
        
        console.log(text.target)

        let username = getUser().username;
        let userId = getUser().id;
        let content = text;
        let commentDate = new Date().toString().slice(3, 24);

        recipeServices.commentOne({ username, content, userId, commentDate }, match.params.recipeId)
            .then(res => {
                setRecipe(res)
                history.push(`/recipes/details/${recipe._id}`)
            })
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
            <button className='sortBtnDeleteRecipe' onClick={handleShow}>Delete</button>
        </div>
    )

    const userButtons = (
        <>


            {recipe.likes?.includes(getUser()?.id) ?
                (<h5 className='likedText'>You liked this recipe!</h5>)
                :
                (<button className='likesTwo' className="likes" onClick={isLiked}>Like</button>)
            }


        </>
    )
    return (
        <section id="deatils-page">
            <div className="titlepageRecipe">
                <h2>Best <strong className="llow">Recipes</strong></h2>
            </div>
            <div className="wrapper-recipe">
                <div className="product-img">
                    <img src={recipe.imageUrl} />
                </div>
                <div className="product-info">
                    <div className="product-text">



                        <div className='title'>
                            <h1>{recipe.title}</h1>
                            <h4><b className='author'>Author: {recipe.author}</b></h4>
                        </div>
                        <h4><b>Serves:</b> 5</h4>
                        <h4><b>Preparation time:</b> {recipe.preparationTime} min</h4>
                        <h4><b>Cooking time:</b> {recipe.cookingTime} min</h4>
                        <h4><b>Ingredients:</b><br /><br />{recipe.ingredients}</h4>
                        <h4 className='likesTwo'><b>Likes:</b> {recipe.likes ? recipe.likes.length : 0}</h4>


                        {getUser()?.id && (recipe.creator == getUser()?.id ? ownerButtons : userButtons)}



                        <p><b>Directions:</b> {recipe.directions}</p>

                    </div>

                </div>
            </div>
            <div className='comments'>

                <h3 className='titleComments'>Comments:</h3>

                

                    <div id='commentsContext'>

                        <InputEmoji
                            value={text}
                            onChange={setText}
                            cleanOnEnter
                            onEnter={handleOnEnter}
                            placeholder='Type a comment and enter...'
                        />

                    </div>

              

                {
                    recipe.comments?.length > 0 ? (

                        <div className='allComments'>

                            {recipe.comments.map(x =>

                                <div className='currentComment' key={x.content}>

                                    <h5 className='titleComment'>[{x.username}]</h5>

                                    <div className='Time'>
                                        <p className='timeP'>- {x.commentDate} -</p>
                                    </div>
                                    <p className='commentsP'>{x.content}</p>
                                </div>
                            )}

                        </div>

                    ) : <p id='emptyParagraph'>Add first comment!</p>}


            </div>

            <Modal show={show} onHide={handleClose}>

                <Modal.Body>Do you want to delete this article?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={deleteRecipe}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>

        </section>
    )

}

export default DetailsRecipes;